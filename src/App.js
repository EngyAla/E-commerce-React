import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import SignUp from './pages/Signup';
import Favourite from './pages/Favourite';
import Cart from './pages/Cart';
import SLideNine from './components/HomeSlideNine';
import Login from './pages/Login';
import NotFoundPage from './pages/Notfound';
import ProductDetails from './pages/ProductDetails';
import Account from './pages/Account';
import ChechOut from './pages/CheckOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/E-commerce-React'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/favourite' element={<Favourite />}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
          <Route path='/products/:productId' element={<ProductDetails />} />
          <Route path='/account' element={<Account />} />
          <Route path='/checkout' element={<ChechOut />} />
        </Routes>
        <SLideNine />  
      </BrowserRouter>
    </div>
  );
}

export default App;