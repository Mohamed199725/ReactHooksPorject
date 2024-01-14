// src/MovieList.js/A functional component that represents the list of movies and It maps through the movies array and renders a MovieCard component for each movie.

import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;