import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

const WeatherForecast = ({ token }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState('');

    if (token) {
        console.log('Token:', token);
    }
    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get('http://localhost:50002/WeatherForecast', {
                    headers: {
                        'Authorization': `Bearer ${token}` // Include token in the request headers
                    }
                });
                setWeatherData(response.data);
            } catch (error) {
                setError('Error fetching weather data');
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, [token]);

    return (
        <div>
            <h2>Weather Forecast</h2>
            {error && <div>{error}</div>}
            <div className="card-group">
                {weatherData.map((data, index) => (
                    <WeatherCard key={index} data={data} />
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
