// src/MovieCard.js/A functional component that represents an individual movie card and It takes a movie object as a prop and displays the movie's poster, title, description, and rating.
import React from 'react';


const MovieCard = ({ movie }) => {
    return (
        <div
            style={{
                border: '2px solid #333',
                borderRadius: '10px',
                padding: '10px',
                margin: '10px',
                width: '200px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            }}
        >
            <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3 style={{ fontSize: '16px', margin: '10px 0', fontWeight: 'bold', color: '#8b0000' }}>{movie.title}</h3>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>{movie.description}</p>
            <p style={{ fontSize: '14px', fontWeight: 'bold' }}>
                Rating: <span style={{ color: '#28a745' }}>{movie.rating}</span>
            </p>
        </div>
    );
};

export default MovieCard;