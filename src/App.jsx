import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diaries from './pages/Diaries/Diaries';
import Promos from './pages/Promos/Promos';
import Papers from './pages/Papers/Papers';
import Accessories from './pages/Accessories/Accessories';
import Account from './pages/Account/Account';
import SeeAll from './pages/SeeAll/SeeAll';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';

const App = () => {
  const [count, setCount] = useState(0)
  const greeting = 'Somos Benni, la tienda mágica donde encontrarás todo para tu librería.'

  return (
    <Router>
      <div>
        <NavBar className='navbar' />
      </div>
      <div className='main'>
        <div className='itemListContainer'>
          <ItemListContainer greeting={greeting} />
        </div>
        <div className='iconContainer'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/diaries2024' element={ <Diaries /> } />
        <Route path='/promos' element={ <Promos /> } />
        <Route path='/papers' element={ <Papers /> } />
        <Route path='/accessories' element={ <Accessories /> } />
        <Route path='/account' element={ <Account /> } />
        <Route path='/seeAll' element={ <SeeAll /> } />
        <Route path='/*' element={ <ErrorPage /> } />
      </Routes>
    </Router>
  )
}

export default App
