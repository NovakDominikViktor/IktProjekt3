import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated, userRole, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">My App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>

              </>
            )}
            {isAuthenticated && userRole === 'ADMIN' && (
              <li className="nav-item">
                <Link className="nav-link" to="/weather">Weather Forecast</Link>
              </li>
            )}
            {isAuthenticated && userRole !== 'ADMIN' && (
              <li className="nav-item">
                <Link className="nav-link" to="/user">User Page</Link>
              </li>
            )}
            {isAuthenticated && userRole !== 'ADMIN' && (
              <li className="nav-item">
                <Link className="nav-link disabled" to="/weather" onClick={(e) => e.preventDefault()}>Weather Forecast</Link>
              </li>
            )}
            {isAuthenticated && userRole === 'ADMIN' && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin Page</Link>
              </li>
            )}
          </ul>
          {isAuthenticated && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <button onClick={onLogout} className="btn btn-link nav-link">Logout</button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
