import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png';

export default class Sidebar extends React.Component
{
	render()
	{
		return (
			<div className="sidebar">
				<div className="img-container">
					{ /*<img src={logo} />*/ }
				</div>
				<nav className="sidebar-nav">
					<NavLink to="/main/sample" activeClassName="selected">Sample</NavLink>
				</nav>
			</div>
		);
	}
}
