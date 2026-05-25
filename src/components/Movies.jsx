import { useState, useEffect } from 'react';
import './Movies.css';

function Movies() {
    const apiKey = 'e76e5404';
    const [movies, setMovies] = useState([]);

    const mainMovies = [
        "tt0111161",
        "tt0468569",
        "tt0133093",
        "tt0068646",
        "tt0120737",
        "tt0167260",
        "tt1345836",
        "tt0167261",
        "tt0770828",
        "tt0102926"
    ];

    useEffect(() => {
        const fetchMovies = mainMovies.map(imdbID => {
            return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
                .then(response => response.json())
        });

        Promise.all(fetchMovies)
            .then((movies) => setMovies(movies))
            .catch((err) => console.log("Sorğuda xəta baş verdi:", err));

    }, []);


    return (
        <div className="movies-box">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                    <div className="movie-info">
                        <h1>{movie.Title}</h1>
                        <p><b>Year:</b> {movie.Year}</p>
                        <button>+ Favorite</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Movies;