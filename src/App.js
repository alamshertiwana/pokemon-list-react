import './App.css';
import Pokemon from './components/Pokemon';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Page from './components/Page';
import Items from './components/Items';
import ItemPage from './components/ItemPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="page/:id" element={<Page/>} />
            <Route path="pokemon/:id" element={<Pokemon/>} />
            <Route path="items/" element={<Items/>} />
            <Route path="items-page/:id/" element={<ItemPage/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>   
    </>
  );
}

export default App;
