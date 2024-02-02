import './App.css'
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accessories from './pages/Accessories/Accessories';
import SeeAll from './pages/SeeAll/SeeAll';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import ItemsProvider from './context/ItemsContext';
import ItemsCategory from './pages/ItemsCategory/ItemsCategory';

const App = () => {

  return (
    <Router>
      <ItemsProvider>
        <div>
          <NavBar className='navbar' />
        </div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/accessories' element={ <Accessories /> } />
          <Route path='/seeAll' element={ <SeeAll /> } />
          <Route path='/item/:id' element={ <ItemDetailContainer /> } />
          <Route path='/category/:category' element={ <ItemsCategory /> } />
          <Route path='/*' element={ <ErrorPage /> } />
        </Routes>
      </ItemsProvider>
    </Router>
  )
};

export default App;
