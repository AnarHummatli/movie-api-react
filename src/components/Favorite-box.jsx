import { useState } from 'react';
import './Favorite-box.css';

function FavoriteBox({ favoriteMovies, deleteFavoriteMovie }) {

    const [titleInput, setTitleInput] = useState("");

    const handleInputChange = (e) => {
        setTitleInput(e.target.value);
    };

    const isInputEmpty = titleInput.trim() === "";

    return (
        <div className="favorite-box">
            <div className='favorite-movies-list'>
                {favoriteMovies.map((movieTitle, index) => (
                    <div className='chosen-movie' key={index}>
                        <p>{movieTitle}</p>
                        <img
                            src='src/assets/cancel.svg'
                            alt='cancel-button'
                            onClick={() => deleteFavoriteMovie(movieTitle)}
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
                disabled={isInputEmpty}
            >
                Add To Favorite List
            </button>
            <button className='look-favorite-list'>Look At Favorite List</button>
        </div>
    );
}

export default FavoriteBox;