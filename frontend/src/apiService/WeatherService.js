import axios from 'axios';

export const getForecasts = () => {
	const URL = 'http://localhost:8080/weatherData';

	return axios.get(URL)
		.then((response) => {
			return response.data.forecasts;
		})
		.catch(err => console.log(err));
};
