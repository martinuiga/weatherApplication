import React, { Component } from 'react';
import './Forecast.css';

class Forecast extends Component {

	render() {
		let phenomenonDay = this.props.forecast.forecastInfoDay.phenomenon.split(' ').join('');
		let phenomenonNight = this.props.forecast.forecastInfoNight.phenomenon.split(' ').join('');

		return (
			<div className="container">
				<div className="forecastDate">
					{this.props.forecast.date}
				</div>

				<div className="dayLabel"> Daily: </div>

				<div className="dayLogo">
					<img src={require(`../../assets/images/${phenomenonDay}.svg`)} style={{width: '50px', height: '50px'}} alt="logo"/>
				</div>

				<div className="dayTempContainer">
					<div>
						Minimum: {this.props.forecast.forecastInfoDay.tempmin}
					</div>
					<div>
						Maximum: {this.props.forecast.forecastInfoDay.tempmax}
					</div>
				</div>

				<div className="nightLabel"> Night: </div>

				<div className="nightLogo">
					<img src={require(`../../assets/images/${phenomenonNight}.svg`)} style={{width: '50px', height: '50px'}} alt="logo"/>
				</div>

				<div className="nightTempContainer">
					<div>
						Minimum: {this.props.forecast.forecastInfoNight.tempmin}
					</div>
					<div>
						Maximum: {this.props.forecast.forecastInfoNight.tempmax}
					</div>
				</div>

			</div>
		)
	}

}

export default Forecast;
