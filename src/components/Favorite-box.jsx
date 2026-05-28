import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Favorite-box.css';

function FavoriteBox({ favoriteMovies, deleteFavoriteMovie, clearFavoriteList, addFavoriteList, allLists }) {

    const [titleInput, setTitleInput] = useState("");

    const handleInputChange = (e) => {
        setTitleInput(e.target.value);
    };

    const handleSubmitList = () => {
        addFavoriteList(titleInput, favoriteMovies);
        setTitleInput("");
        clearFavoriteList();
    };

    const isListEmpty = allLists.length === 0;

    const isButtonDisabled = !titleInput.trim() || !favoriteMovies.length;

    return (
        <div className="favorite-box">
            <div className='favorite-movies-list'>
                {favoriteMovies.map((movie) => (
                    <div className='chosen-movie' key={movie.imdbID}>
                        <p>{movie.Title}</p>
                        <img
                            src="cancel.svg"
                            alt='cancel-button'
                            onClick={() => deleteFavoriteMovie(movie.imdbID)}
                        />
                    </div>
                ))}
            </div>
            <input
                type='text'
                placeholder="Enter list name..."
                value={titleInput}
                onChange={handleInputChange}
            />
            <button
                className='add-favorite-list'
                disabled={isButtonDisabled}
                onClick={handleSubmitList}
            >
                Add To Favorite List
            </button>

            <Link to="/favorites">
                <button className='look-favorite-list' disabled={isListEmpty}>Look At Favorite List</button>
            </Link>
        </div>
    );
}

export default FavoriteBox;