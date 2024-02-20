import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';


const Login = ({ onLogin }) => {
    return (
        <div className="container">
            <h2 className="text-center">Login</h2>
            <LoginForm onLogin={onLogin} />
            <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Login;
