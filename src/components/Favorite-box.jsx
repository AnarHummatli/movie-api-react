import './Favorite-box.css';

function FavoriteBox({ favoriteMovies }) {
    return (
        <div className="favorite-box">
            <div className='favorite-movies-list'>
                {favoriteMovies.map( (movieTitle, index) => (
                    <div className='chosen-movie' key={index}>
                        <p>{movieTitle}</p>
                        <img src='src/assets/cancel.svg' alt='cancel-button' />
                    </div>
                ))}
            </div>
            <input type='text' />
            <button className='add-favorite-list'>Add To Favorite List</button>
            <button className='look-favorite-list'>Look At Favorite List</button>
        </div>
    );
}

export default FavoriteBox;