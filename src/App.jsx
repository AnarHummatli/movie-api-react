import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import FavoriteListPage from './components/FavoriteListPage';
import './App.css'

function App() {
  return (
    <div className="app" >
      <Header />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path="/favorites" element={<FavoriteListPage />} />
      </Routes>

    </div>
  )
}

export default App