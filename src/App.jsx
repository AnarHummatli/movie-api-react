import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import FavoriteListPage from './components/FavoriteListPage';
import './App.css'

let listIdCounter = 1;

function App() {
  const [allLists, setAllLists] = useState([]);

  const addFavoriteList = (titleInput, favoriteMovies) => {
    const newList = {
      id: listIdCounter,
      name: titleInput,
      movies: favoriteMovies
    };

    setAllLists([...allLists, newList]);
    listIdCounter++;
  };

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Main addFavoriteList={addFavoriteList} />} />
        <Route
          path="/favorites"
          element={<FavoriteListPage allLists={allLists} />}
        />
      </Routes>
    </div>
  )
}

export default App;