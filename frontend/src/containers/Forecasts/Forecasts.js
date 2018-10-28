import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { getForecasts } from '../../apiService/WeatherService';
import Paper from '@material-ui/core/Paper';
import './Forecasts.css';

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

	renderWeather = (forecast) => {
		let phenomenonDay = forecast.forecastInfoDay.phenomenon.split(' ').join('');
		let phenomenonNight = forecast.forecastInfoNight.phenomenon.split(' ').join('');

		return (
			<div className="container">
				<div className="forecastDate">
					{forecast.date}
				</div>

				<div className="dayLabel"> Daily: </div>

				<div className="dayLogo">
					<img src={require(`../../assets/images/${phenomenonDay}.svg`)} style={{width: '50px', height: '50px'}} alt="logo"/>
				</div>

				<div className="dayTempContainer">
					<div>
						Minimum: {forecast.forecastInfoDay.tempmin}
					</div>
					<div>
						Maximum: {forecast.forecastInfoDay.tempmax}
					</div>
				</div>

				<div className="nightLabel"> Night: </div>

				<div className="nightLogo">
					<img src={require(`../../assets/images/${phenomenonNight}.svg`)} style={{width: '50px', height: '50px'}} alt="logo"/>
				</div>

				<div className="nightTempContainer">
					<div>
						Minimum: {forecast.forecastInfoNight.tempmin}
					</div>
					<div>
						Maximum: {forecast.forecastInfoNight.tempmax}
					</div>
				</div>

			</div>
		);
	};

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
						textAlign: 'center'}} obj={forecast} key={i} children={this.renderWeather(forecast)} />) : "Service is not working"}
				</div>
			</div>
		)
	}

}

export default Forecasts;
