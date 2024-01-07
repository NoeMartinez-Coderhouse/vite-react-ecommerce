import './App.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Promos from './pages/Promos/Promos';
import Papers from './pages/Papers/Papers';
import Accessories from './pages/Accessories/Accessories';
import Account from './pages/Account/Account';
import SeeAll from './pages/SeeAll/SeeAll';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Diaries from './pages/Diaries/Diaries';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar className='navbar' />
      </div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/category/:categoryId' element={ <Diaries /> } />
        <Route path='/promos' element={ <Promos /> } /> 
        <Route path='/category/:categoryId/:speciesId' element={ <Papers /> } />
        <Route path='/accessories' element={ <Accessories /> } />
        <Route path='/account' element={ <Account /> } />
        <Route path='/seeAll' element={ <SeeAll /> } />
        <Route path='/item/:id' element={ <ItemDetailContainer /> } />
        <Route path='/*' element={ <ErrorPage /> } />
      </Routes>
    </Router>
  )
}

export default App
