import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} className="movie-card" key={movie.id}>
          <div>
            <h2>{movie.title}</h2>
            <p><em>{movie.tagline}</em></p>
            <p>Rating: {Number(movie.vote_average).toFixed(1)} / 10</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
