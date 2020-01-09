import * as React from 'react';

import {GetMap} from '../../Application/GetMap';

export const MapController: React.FunctionComponent = (): React.ReactElement => {

    return (
        <div className="wrapper">
            <h1>Trajectoires</h1>
            <GetMap />
        </div>
    );
}