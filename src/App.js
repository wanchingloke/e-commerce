import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from "./components/navbar"; 
import {Footer} from "./components/footer";
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/> {/*This makes sure that the navbar is in every page*/ }
          <Routes>
            <Route path='/e-commerce' element={<Shop/>} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <Footer/>
        </Router>
      </ShopContextProvider>
    </div>);
}

export default App;
