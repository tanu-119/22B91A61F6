// src/components/ResultPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './styles.css';

const ResultPage = () => {
    const location = useLocation();
    const { longUrl, shortUrl, time } = location.state || {};
    const [allUrls, setAllUrls] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("shortUrls")) || [];
        setAllUrls(stored);
    }, []);

    const getShortPath = (url) => url.split('/').pop();

    return (
        <div className="container">
            <h1>Shortened URL Result</h1>
            <p className="result-info"><strong>Long URL:</strong> {longUrl}</p>
            <p className="result-info">
                <strong>Short URL:</strong>{' '}
                <a
                    href={`/r/${getShortPath(shortUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {shortUrl}
                </a>
            </p>
            <p className="result-info"><strong>Time:</strong> {time} seconds</p>

            <hr style={{ margin: '30px 0' }} />

            <h2 style={{ textAlign: 'center' }}>Previous URLs</h2>
            {allUrls.length === 0 ? (
                <p style={{ textAlign: 'center' }}>No previous URLs found.</p>
            ) : (
                allUrls.map((url, index) => (
                    <div key={index} className="result-info" style={{ marginBottom: '15px' }}>
                        🔗 <a href={`/r/${getShortPath(url.shortUrl)}`} target="_blank" rel="noopener noreferrer">
                            {url.shortUrl}
                        </a> → <span>{url.longUrl}</span><br />
                        ⏱️ <small>Time: {url.time} seconds</small>
                    </div>
                ))
            )}

            <Link to="/">Go Back</Link>
        </div>
    );
};

export default ResultPage;
