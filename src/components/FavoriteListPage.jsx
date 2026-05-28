import { Link } from 'react-router-dom';
import './FavoriteListPage.css';

function FavoriteListPage({ allLists, deleteFavoriteList }) {

  if (allLists.length == 0) {
    return (
      <div className='favorite-list-page'>
        <div className='empty-favorite-box'>
          <p>There are no favorite movies yet!</p>
          <p>Please return to the Movies page to create one.</p>
        </div>
        <Link to="/">
          <button className="back-to-movies-btn">Movies</button>
        </Link>
      </div>
    )
  }

  return (

    <div className='favorite-list-page'>

      {allLists.map((list) => (
        <div className='favorite-element' key={list.id}>
          <div className='favorite-element-box'>
            <h3>{list.name}</h3>
            <div className='favorite-element-movies-list'>

              {list.movies.map((movie) => (
                <div className='favorite-element-movies-box' key={movie.imdbID}>
                  <p>{movie.Title}</p>
                  <a
                    href={`https://www.imdb.com/title/${movie.imdbID}/`} target='_blank'>IMDB</a>
                </div>
              ))}
            </div>
          </div>
          <img
            src='src/assets/cancel.svg'
            alt='cancel-button'
            onClick={() => deleteFavoriteList(list.id)}
          />
        </div>
      ))}

      <Link to="/">
        <button className="back-to-movies-btn">Movies</button>
      </Link>

    </div>
  )
}

export default FavoriteListPage;