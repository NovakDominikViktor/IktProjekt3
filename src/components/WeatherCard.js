import React from 'react';

const WeatherCard = ({ data }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">Date: {data.date}</h5>
                <p className="card-text">Temperature: {data.temperatureC}°C</p>
                <p className="card-text">Summary: {data.summary}</p>
            </div>
        </div>
    );
};

export default WeatherCard;
