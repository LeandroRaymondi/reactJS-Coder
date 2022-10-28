import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { CacheProvider } from './context/CacheContext';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <BrowserRouter>
        <CacheProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Welcome to TechWorld'} />}></Route>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Welcome to TechWorld'} />}></Route>
              <Route path='/ReactJS-Coder/' element={<ItemListContainer greeting={'Welcome to TechWorld'} />}></Route>
              <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route parth='/checkout' element={<Checkout />}></Route>
            </Routes>
          </CartProvider>
        </CacheProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
