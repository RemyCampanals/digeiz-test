import React from 'react';

import {MapController} from '../Map/Infrastructure/Pages/MapController';
import './Infrastructure/Style/App.sass';

export const App: React.FunctionComponent = () => {

	return (
		<div className="layout">
			<header className="layout--header">
				<div className="layout--header-brand-name">
					DiGeiz
				</div>
			</header>
			<div className="layout--content">
				<MapController />
			</div>
			<footer className="layout--footer">
				Rémy Campanals - 2020
			</footer>
		</div>
	);
}