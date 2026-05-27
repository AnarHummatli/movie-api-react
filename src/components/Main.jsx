import { useState } from "react";
import Movies from "./Movies";
import FavoriteBox from "./Favorite-box";
import "./Main.css";

function Main({ addFavoriteList }) {
    const [input, setInput] = useState("");
    const [searchText, setSearchText] = useState("");
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const isSearchDisabled = input.trim().length < 3;

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearch = () => {
        setSearchText(input);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !isSearchDisabled) {
            handleSearch();
        }
    }

    const addToFavorite = (movie) => {
        const isAlreadyAdded = favoriteMovies.some(fav => fav.imdbID === movie.imdbID);
        if (!isAlreadyAdded) {
            setFavoriteMovies([...favoriteMovies, movie]);
        }
    }

    const deleteFavoriteMovie = (imdbID) => {
        const updatedFavoriteMovies = favoriteMovies.filter(movie => movie.imdbID !== imdbID);
        setFavoriteMovies(updatedFavoriteMovies);
    }

    const clearFavoriteList = () => {
        setFavoriteMovies([]);
    };

    return (
        <main>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSearch}
                    disabled={isSearchDisabled}
                >
                    Search
                </button>
            </div>

            <div className='movies-container'>
                <Movies
                    searchText={searchText}
                    addToFavorite={addToFavorite}
                    favoriteMovies={favoriteMovies}
                />
                <FavoriteBox
                    favoriteMovies={favoriteMovies}
                    deleteFavoriteMovie={deleteFavoriteMovie}
                    clearFavoriteList={clearFavoriteList}
                    addFavoriteList={addFavoriteList}
                />
            </div>
        </main>
    )
}

export default Main;