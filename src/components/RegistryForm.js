import React, { useState } from 'react';

const RegistryForm = ({ onSubmit }) => {
    const [userData, setUserData] = useState({
        userName: '',
        fullName: '',
        age: '',
        password: '',
        email: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:50001/api/Auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (response.ok) {
                const responseData = await response.text();
                setMessage(responseData)
                setUserData({
                    userName: '',
                    fullName: '',
                    age: '',
                    password: '',
                    email: ''
                });
            } else {
                const errorData = await response.text();
                setMessage(errorData);
            }
        } catch (error) {
            console.error('Error registering user:', error);
            setMessage('Failed to register user');
        }
    };
    
    return (
        <div className="container">
            <h2 className="text-center">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        value={userData.userName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Age:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={userData.age}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
                {message && <div className="alert alert-info">{message}</div>}
            </form>
        </div>
    );
};

export default RegistryForm;
