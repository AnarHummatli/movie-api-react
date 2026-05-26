import { useState } from "react";
import Movies from "./Movies";
import FavoriteBox from "./Favorite-box";
import "./Main.css";

function Main() {
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

    const addToFavorite = (movieTitle) => {
        if (!favoriteMovies.includes(movieTitle)) {
            setFavoriteMovies([...favoriteMovies, movieTitle]);
        }
    }

    const deleteFavoriteMovie = (movieTitle) => {
        const uptadedFavoriteMovies = favoriteMovies.filter(title => title !== movieTitle);
        setFavoriteMovies(uptadedFavoriteMovies);
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
                />
            </div>

        </main>
    )
}

export default Main;