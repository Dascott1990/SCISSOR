// src/components/SignIn.tsx

import React, { useState } from 'react';

interface SignInProps {
    onSignIn: (uid: string) => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Sign in failed. Please check your credentials.');
            }

            const data = await response.json();
            onSignIn(data.uid);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSignIn}>
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
            <button type="submit">Sign In</button>
            {error && <p className="error-text">{error}</p>}
        </form>
    );
};

export default SignIn;
