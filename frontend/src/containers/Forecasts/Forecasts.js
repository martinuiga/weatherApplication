import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { getForecasts } from '../../apiService/WeatherService';
import Paper from '@material-ui/core/Paper';
import './Forecasts.css';
import Forecast from '../Forecast/Forecast';

class Forecasts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forecasts: []
		};
	}

	componentWillMount() {
		this.updateWeatherData();
	}

	updateWeatherData() {
		return getForecasts().then(forecasts => {
			this.setState({ forecasts });
		})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div>
				<div className="buttonDiv">
					<Button variant="outlined" children="Refresh" onClick={() => {this.updateWeatherData()}}/>
				</div>
				<div>
					{(this.state.forecasts) ? this.state.forecasts.map((forecast, i) => <Paper style={{
						height: 150,
						margin: 20,
						textAlign: 'center'}} obj={forecast} key={i} children={<Forecast forecast={forecast}/>} />) : "Service is not working"}
				</div>
			</div>
		)
	}

}

export default Forecasts;
