import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Diaries from './components/Diaries/Diaries';

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
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <Routes>
        <Route path='/' element={ <Diaries /> } />
      </Routes>
    </Router>
  )
}

export default App
