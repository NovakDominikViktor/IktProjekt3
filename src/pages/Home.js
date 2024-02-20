import React from 'react';
import { Link } from 'react-router-dom';
import WeatherForecast from './WeatherForecast'; // Importáljuk be a WeatherForecast komponenst

const Home = ({ isAuthenticated, userRole}) => {
  return (
    <div>
      {isAuthenticated ? (
        <>
          {userRole === 'ADMIN' ? (
            <WeatherForecast token ={isAuthenticated} /> 
          ) : (
            <p>Nincs engedélyed.</p>
          )}
          
        </>
      ) : (
        <>
          <p>Lépj be hogy láss valamit.</p>
          
        </>
      )}
    </div>
  );
};

export default Home;
