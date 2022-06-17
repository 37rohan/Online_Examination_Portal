import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';
import AddFaculty from './pages/AddFacul';
import AddStudent from './pages/AddStudent';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={<Protected><Account /></Protected>} />
          <Route path='/admin' element={<Protected> <Admin /> </Protected>} />
          <Route path='/addfaculty' element={<Protected> <AddFaculty /> </Protected>} />
          <Route path='/addstudent' element={<Protected> <AddStudent /> </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
