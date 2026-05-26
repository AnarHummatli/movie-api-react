import { useState } from "react";
import Movies from "./Movies";
import FavoriteBox from "./Favorite-box";
import "./Main.css";

function Main() {
    const [input, setInput] = useState("");
    const [searchText, setSearchText] = useState("");
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSearch = () => {
        setSearchText(input);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    const addToFavorite = (movieTitle) => {
        if (!favoriteMovies.includes(movieTitle)) {
            setFavoriteMovies([...favoriteMovies, movieTitle]);
        }
    }

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
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className='movies-container'>
                <Movies searchText={searchText} addToFavorite={addToFavorite} />
                <FavoriteBox favoriteMovies={favoriteMovies} />
            </div>

        </main>
    )
}

export default Main;