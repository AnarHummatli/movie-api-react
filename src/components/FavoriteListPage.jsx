import { Link } from 'react-router-dom';
import './FavoriteListPage.css';

function FavoriteListPage() {
  return (
    <div className='favorite-list-page'>

      <div className='favorite-element'>

        <div className='favorite-element-box'>
          <h3>Example</h3>
          <div className='favorite-element-movies-list'>

            <div className='favorite-element-movies-box'>
              <p>The Shawshank Redemption</p>
              <a href=''>IMDB</a>
            </div>

            <div className='favorite-element-movies-box'>
              <p>The Dark Knight</p>
              <a href=''>IMDB</a>
            </div>

          </div>
        </div>

        <img src='src/assets/cancel.svg' alt='cancel-button' />
      </div>

      <Link to="/">
        <button className="back-to-movies-btn">Movies</button>
      </Link>

    </div>
  )
}

export default FavoriteListPage;