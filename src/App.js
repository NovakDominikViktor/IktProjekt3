import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Registry';
import WeatherForecast from './pages/WeatherForecast';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import Navbar from './components/Navbar';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [token, setToken] = useState(null);
  const [userRole, setUserRole] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
    const decodedToken = jwtDecode(newToken);
    const userRole = decodedToken.role;
    setUserRole(userRole);
    console.log('Logged in successfully with token:', newToken);
    console.log('User role:', userRole); // Log the user role
  };
  const handleLogout = () => {
    
    setToken(null); // Clear the token
    setUserRole(''); // Clear the user role
    console.log('Logged out successfully');
  };


  return (
    <Router>
      <div>
        <Navbar isAuthenticated={!!token} userRole={userRole} onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home isAuthenticated={token} userRole={userRole} onLogout={handleLogout} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/weather" element={<WeatherForecast token={token} />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage token={token}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
