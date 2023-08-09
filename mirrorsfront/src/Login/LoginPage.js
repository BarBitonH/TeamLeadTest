import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import MirrorsLogo from '../assets/MirrorsLogo.png'; // Adjust the path if necessary
import {useNavigate} from "react-router-dom";
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialise useNavigate

    const handleLogin = async () => {
        setIsLoggingIn(true);
        try {
            // Temporarily comment out your API call for testing
            // const response = await axios.post('/LoginRouter/login', { email, password });
            // if (response.status === 200) {
            // Navigate to CompanyProfile page after successful login
            navigate('/ProfileUpdate');
            // }
        } catch (error) {
            // if (error.response && (error.response.status === 401 || error.response.status === 400 || error.response.status === 500)) {
            setError('Wrong password or email');
            // }
            setIsLoggingIn(false);
        }
    };

    return (
        <div className="login-container">
            <div className="background-image"></div>
            <img src={MirrorsLogo} alt="Mirrors Logo" className="logo" />
            <div className="side-rectangle">Login to become extraordinary</div>
            <div className="login-card">
                <input
                    type="email"
                    placeholder="Email"
                    className="login-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="login-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className={`login-button${isLoggingIn ? ' disabled' : ''}`}
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                >
                    Login
                </button>
                {error && <div className="error-text">{error}</div>}
            </div>
        </div>
    );
};

export default LoginPage;
