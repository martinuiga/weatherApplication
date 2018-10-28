import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import './Layout.css';
import Forecasts from '../Forecasts/Forecasts';

class Layout extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
				</header>
				<Forecasts/>
			</div>
		)
	}
}

export default Layout;
