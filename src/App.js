import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Welcome to TechWorld'} />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Welcome to TechWorld'} />}></Route>
          <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route parth='/checkout' element={<Checkout />}></Route>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
