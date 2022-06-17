import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Navbar';
import Nav2 from './components/Navbar2';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={[<Nav />, <Home />]} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={[<Protected> <Nav2 />,<Account /></Protected>]} />
          <Route path='/admin' element={<Protected> <Admin /> /</Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
