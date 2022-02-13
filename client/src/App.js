import Register from './components/CreateAccount'
import Nav from './components/Nav';
import LandingPage from './pages/landing';
import { CheckSession } from './services/auth';
import { BASE_URL } from './globals/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import LogInPage from './pages/login';
import LogIn from './components/LogIn';
import FoodDisplay from './pages/food';
import BevDisplay from './pages/beverage';
import WaresDisplay from './pages/wares';
import VendorDetails from './pages/vendorDetails';
import ProductDetails from './pages/productDetails';
import Footer from './components/Footer';
import Cart from './components/ShoppingCart';
import RegisterPage from './pages/register';
import UserForm from './components/UserForm';

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [authUser, setAuthUser] = useState({});
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };
  const getAuthUser = async () => {
    const id = localStorage.getItem('id');
    axios.get(`${BASE_URL}/users/${id}`).then((res) => {
      setAuthUser(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      checkToken();
      getAuthUser();
    }
  }, []);

  const handleLogOut = () => {
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };
  return (
    <div className="App">
      <header>
      <h1>MRK3T</h1>
      <Link className="material-icons" to='/buggy'>
                shopping_cart
      </Link>
      <Nav 
      user={authUser}
      authenticated={authenticated}
      handleLogOut={handleLogOut}
      />
      </header>
      <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path ='/login' element={
          <LogInPage 
            setAuthUser={setAuthUser}
            authUser={authUser}
            toggleAuthenticated={toggleAuthenticated}
            authenticated={authenticated}
          />}/>
          <Route path='/dashboard' element={<Dashboard
          authenticated = {authenticated}
          authUser={authUser}
          checkToken={checkToken}
          setUser={setUser}/>}
          />
          <Route path = '/buggy' element={< Cart/>}/>
          <Route path = '/food' element={ <FoodDisplay />}/>
          <Route path = '/bev' element={ <BevDisplay />}/>
          <Route path = '/wares' element={ <WaresDisplay />}/>
          <Route path = '/users/info/:id' element={<VendorDetails/>}/>
          <Route path = '/products/:id' element={<ProductDetails/>}/>
      </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
