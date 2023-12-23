import Cards from './Cards';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Header from './Header';
import TVShows from './TVShows';
import Movies from './Movies';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/tvshows' element={<TVShows/>}> </Route>
      <Route path='/movies' element={<Movies/>}> </Route>
    </Routes>
    </BrowserRouter>

       <Cards/>
      
     

    </>
  
    
  );
}

export default App;
