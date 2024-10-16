// src/components/CTA.tsx

import React, { useState } from 'react';
import Login from './Login';
// Other imports...

const CTA: React.FC = () => {
    const [userId, setUserId] = useState<string | null>(null);
    const [isLoginVisible, setLoginVisible] = useState(false);

    const handleLogin = (loggedInUserId: string) => {
        setUserId(loggedInUserId);
        setLoginVisible(false);
    };

    return (
        <section className="optimize">
            <h1>Revolutionizing Link Optimization</h1>
            <div className="optimize-btn">
                <a
                    href="#"
                    className="btn btn-blue optimize-btn"
                    onClick={() => {
                        if (userId) {
                            // Toggle popup to show saved links
                        } else {
                            setLoginVisible(true);
                        }
                    }}
                >
                    Get Started
                </a>
            </div>

            {isLoginVisible && (
                <div className="popup-overlay" onClick={() => setLoginVisible(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <Login onLogin={handleLogin} />
                        <button onClick={() => setLoginVisible(false)} className="btn btn-close">Close</button>
                    </div>
                </div>
            )}

            {/* Other component logic for showing saved links... */}
        </section>
    );
};

export default CTA;
