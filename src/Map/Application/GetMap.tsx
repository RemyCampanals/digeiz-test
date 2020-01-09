import React, {useEffect, useState} from 'react';

import {Path} from '../Domain/Path';

import {D3Map} from '../Infrastructure/Partials/D3Map';
import {Stats} from '../Infrastructure/Partials/Stats';
import {StaticRepository} from '../Infrastructure/Repositories/StaticRepository';

export const GetMap: React.FunctionComponent = (): React.ReactElement => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isInError, setIsInError] = useState<boolean>(false);
    const [paths, setPaths] = useState<Path[]>([]);

    useEffect(() => {
        const pathRepository: StaticRepository = new StaticRepository();

        (async () => {
            await pathRepository.getPeoplesPaths()
                .then((paths: Path[]) => {
                    setPaths(paths);
                    setIsLoading(false);
                }, (error: any) => {
                    console.log(error);
                    setIsInError(true);
                });
        })();
    }, []);

    if (isLoading) {

        return (
            <React.Fragment>Loading...</React.Fragment>
        )
    }

    if (isInError) {

        return (
            <React.Fragment>Une erreur est survenue, veuillez rafraichir la page</React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <D3Map paths={ paths } />
            <Stats paths={ paths } />
        </React.Fragment>
    );
}