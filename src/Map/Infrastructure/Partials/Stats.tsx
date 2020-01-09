import * as React from 'react';

import {Path} from '../../Domain/Path';
import { Point } from '../../Domain/Point';

interface IStatsProps {
    paths: Path[]
}
export const Stats: React.FunctionComponent<IStatsProps> = ({ paths }): React.ReactElement => {

    const distanceSum = (a: Point, b: Point) => {

        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
    }

    const renderPathStats = (): React.ReactElement[] => {

        return paths.map((path: Path, index: number) => {
            const points = path.points.getPointsByTime();
            const minTime = points[0].time;
            const maxTime = points[points.length - 1].time;
            const duration = (maxTime - minTime) / 60;

            let distance: number = 0;

            path.points.forEach((point: Point, index: number, points: Point[]) => {
                const nextPoint = points[index + 1];

                if (nextPoint !== undefined) {
                    distance += distanceSum(point, nextPoint);
                }
            });

            return (
                <div style={{ color: path.strokeColor }} key={ index }>
                    ID: { path.id }<br/>
                    Durée: { Math.round(duration) } minutes<br />
                    Distance : { Math.round(distance) } km<br />
                    Vitesse : { Math.round(distance / (duration / 60)) } km/h
                </div>
            );
        });
    }

    return (
        <React.Fragment>
            <h1>Statistiques</h1>
            
            { renderPathStats() }
        </React.Fragment>
    );
}