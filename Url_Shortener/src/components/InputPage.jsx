// src/components/InputPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const InputPage = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [time, setTime] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const shortCode = shortUrl || Math.random().toString(36).substring(2, 8);
        const fullShortUrl = `short.ly/${shortCode}`;
        const newEntry = { longUrl, shortUrl: fullShortUrl, time };

        const existing = JSON.parse(localStorage.getItem("shortUrls")) || [];
        localStorage.setItem("shortUrls", JSON.stringify([newEntry, ...existing]));

        navigate('/result', {
            state: newEntry,
        });
    };

    return (
        <div className="container">
            <h1>URL Shortener</h1>
            <form onSubmit={handleSubmit}>
                <label>Long URL:</label>
                <input
                    type="url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    required
                />

                <label>Short URL (optional):</label>
                <input
                    type="text"
                    value={shortUrl}
                    onChange={(e) => setShortUrl(e.target.value)}
                    placeholder="e.g. my-link"
                />

                <label>Time (in seconds):</label>
                <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />

                <button type="submit">Shorten</button>
            </form>
        </div>
    );
};

export default InputPage;
