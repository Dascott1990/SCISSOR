// src/components/SignUp.tsx

import React, { useState } from 'react';

interface SignUpProps {
    onSignUp: (uid: string) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Sign up failed. Please try again.');
            }

            const data = await response.json();
            onSignUp(data.uid); // Call the onSignUp callback with the user ID
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError('An unknown error occurred. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={handleSignUp}>
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
            <button type="submit">Sign Up</button>
            {error && <p className="error-text">{error}</p>}
        </form>
    );
};

export default SignUp;
