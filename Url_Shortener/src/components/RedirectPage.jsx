// src/components/RedirectPage.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectPage = () => {
    const { shortCode } = useParams();

    useEffect(() => {
        const urls = JSON.parse(localStorage.getItem("shortUrls")) || [];
        const match = urls.find(entry => entry.shortUrl.endsWith(shortCode));

        if (match) {
            window.location.href = match.longUrl;
        } else {
            alert("Short URL not found!");
        }
    }, [shortCode]);

    return <p>Redirecting...</p>;
};

export default RedirectPage;
