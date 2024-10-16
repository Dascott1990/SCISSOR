// src/components/Login.tsx

import React, { useState } from 'react';

interface LoginProps {
    onLogin: (uid: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignUpMode, setIsSignUpMode] = useState(false); // State to toggle between Login and Sign Up

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const url = isSignUpMode ? 'http://localhost:5000/signup' : 'http://localhost:5000/login';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error(isSignUpMode ? 'Sign up failed. Please try again.' : 'Login failed. Please check your credentials.');
            }

            const data = await response.json();
            onLogin(data.uid); // Call the onLogin callback with the user ID
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred. Please try again.');
            }
            console.error('Error during authentication:', error);
        }
    };

    return (
        <form onSubmit={handleAuth} className="login-form">
            <h2>{isSignUpMode ? 'Sign Up' : 'Login'}</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">{isSignUpMode ? 'Sign Up' : 'Login'}</button>
            {error && <p className="error-text">{error}</p>}
            <p>
                {isSignUpMode ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                    type="button"
                    onClick={() => setIsSignUpMode(!isSignUpMode)} // Toggle between login and signup
                    className="btn-link"
                >
                    {isSignUpMode ? 'Log In' : 'Sign Up'}
                </button>
            </p>
        </form>
    );
};

export default Login;
