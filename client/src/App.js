import Register from './components/CreateAccount'
import Nav from './components/Nav';
import LandingPage from './pages/landing';
import { CheckSession } from './services/auth';
import { BASE_URL } from './globals/index';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import LogInPage from './pages/login';
import LogIn from './components/LogIn';

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
      <h2>Hello World</h2>
      <Nav 
      user={authUser}
      authenticated={authenticated}
      handleLogOut={handleLogOut}
      />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />}/>
        <Route path ='/login' element={
          <LogInPage 
            setAuthUser={setAuthUser}
            authUser={authUser}
            toggleAuthenticated={toggleAuthenticated}
            authenticated={authenticated}
          />}/>
          <Route path='/dashboard' element={<Dashboard
          authUser={authUser}
          checkToken={checkToken}
          setUser={setUser}/>}
          />
      </Routes>
        
    </div>
  );
}

export default App;
