import { useState, useEffect } from 'react';
import whiteBg from '../assets/white-bg.svg';
import './Movies.css';

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

function Movies({ searchText, addToFavorite, favoriteMovies }) {
    const apiKey = 'cbb63091';
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!searchText) {
            const fetchMovies = mainMovies.map(imdbID => {
                return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
                    .then(response => response.json())
            });

            Promise.all(fetchMovies)
                .then((movies) => {
                    setMovies(movies);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log("Sorğuda xəta baş verdi:", err);
                    setLoading(false);
                });
        }
        else {
            fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchText}`)
                .then(response => response.json())
                .then(data => {
                    if (data.Search) {
                        setMovies(data.Search);
                    }
                    else {
                        setMovies([]);
                    }
                    setLoading(false);
                })
                .catch((err) => {
                    console.log("Sorğuda xəta baş verdi:", err);
                    setLoading(false);
                });
        }
    }, [searchText]);

    if (loading) {
        return (
            <div className="movies-box">
                <div className="progress-box">
                    <h2>Loading movies...</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="movies-box">
            {movies.length > 0 ? (
                movies.map((movie) => {
                    const isFavorite = favoriteMovies.some(fav => fav.imdbID === movie.imdbID);
                    return (
                        <div className="movie-card" key={movie.imdbID}>
                            <img
                                src={movie.Poster !== "N/A" ? movie.Poster : whiteBg}
                                alt={movie.Title}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = whiteBg;
                                }}
                            />
                            <div className="movie-info">
                                <h1>{movie.Title}</h1>
                                <p><b>Year:</b> {movie.Year}</p>
                                <button
                                    onClick={() => addToFavorite(movie)}
                                    disabled={isFavorite}
                                >
                                    {isFavorite ? "Added" : "+ Favorite"}
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="progress-box">
                    <h2>Movie was not found!</h2>
                </div>
            )}
        </div>
    );
}

export default Movies;