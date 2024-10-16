
// src/components/URLShorten.tsx
import React, { useState } from 'react';

const URLShorten: React.FC = () => {
    const [url, setUrl] = useState('');
    const [domain, setDomain] = useState('http://short.ly'); // Base domain for shortened URLs
    const [alias, setAlias] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [error, setError] = useState('');
    const [clicks, setClicks] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setQrCodeUrl('');

        // Validate URL input
        if (!url || !isValidUrl(url)) {
            setError('Please enter a valid URL.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/shorten', {  // Match this with the backend endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ originalUrl: url, domain, alias }),
            });

            if (!response.ok) {
                throw new Error('Failed to shorten URL');
            }

            const data = await response.json();
            setShortenedUrl(data.shortenedUrl);
            await generateQRCode(data.shortenedUrl);
            // Optionally fetch analytics data if needed
            // const analyticsData = await fetchAnalytics(data.shortenedUrl);
            // setClicks(analyticsData.clicks);
        } catch (error) {
            if (error instanceof Error) {
                setError(`Failed to shorten URL: ${error.message}`);
            } else {
                setError('Failed to shorten URL. Please try again.');
            }
            console.error('Error during URL shortening:', error);
        }
    };

    const generateQRCode = async (shortenedUrl: string) => {
        try {
            const qrResponse = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(shortenedUrl)}`);
            if (!qrResponse.ok) {
                throw new Error('Failed to generate QR Code');
            }
            const qrCodeData = await qrResponse.blob();
            setQrCodeUrl(URL.createObjectURL(qrCodeData)); // Create a URL for the blob
        } catch (error) {
            console.error('Error generating QR Code:', error);
            setError('Failed to generate QR Code.');
        }
    };

    const isValidUrl = (urlString: string) => {
        const urlPattern = new RegExp('^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])?)\\.)+[a-z]{2,}|' +
            'localhost|' +
            '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' +
            '\\[([a-f\\d]{1,4}:){7}[a-f\\d]{1,4}\\])' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$','i');
        return !!urlPattern.test(urlString);
    };

    return (
        <section className="form" id="form">
            <div className="form-center">
                <form onSubmit={handleSubmit} className="form-box">
                    <input
                        type="text"
                        placeholder="Paste URL here"
                        className="form-control url-input"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />

                    <div className="form-control domain-input">
                        <select
                            name="choose domain"
                            id="choose-domain"
                            className="domain-choice"
                            value={domain}
                            onChange={(e) => setDomain(e.target.value)}
                        >
                            <option value="http://short.ly">Basic</option>
                            <option value="http://professional.ly">Professional</option>
                            <option value="http://teams.ly">Teams</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Type Alias here"
                            className="form-control alias-input"
                            value={alias}
                            onChange={(e) => setAlias(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn-blue btn form-btn">
                        Trim URL <img src="./images/magic wand.svg" alt="Magic Wand Icon" />
                    </button>
                </form>

                {shortenedUrl && qrCodeUrl && (
  <div className="result-container">
    <div className="shortened-url-box">
      <p>Shortened URL: <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">{shortenedUrl}</a></p>
      <p>Clicks: {clicks}</p>
    </div>

    <div className="qr-code-box">
      <p>QR Code:</p>
      <img src={qrCodeUrl} alt="QR Code" />
    </div>
  </div>
)}

                {error && <p className="error-text">{error}</p>}

                <p className="form-text">
                    By clicking Trim URL, I agree to the
                    <strong> Terms of Service, Privacy Policy</strong> and Use of Cookies.
                </p>
            </div>
        </section>
    );
};

export default URLShorten;