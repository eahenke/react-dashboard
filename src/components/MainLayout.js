import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Sidebar from './Sidebar';
import SampleContainer from '../containers/SampleContainer';

export default class MainLayout extends React.Component
{
	render()
	{
		return (
			<div className="grid-container">
				<Sidebar />
				<div className="page-title">
					<h1>
						React Dashboard
					</h1>
				</div>
				<div className="main-content">
					<Switch>
						<Route path="/main/sample" component={SampleContainer} />
						<Redirect to="/main/sample" />
					</Switch>
				</div>

			</div>
		);
	}
}
