import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Account from './pages/Account';
import Admin from './pages/Admin';
import AddFaculty from './pages/AddFacul';
import AddStudent from './pages/AddStudent';
import ExamSchedule from './pages/ExamSchedule';
import AddQue from './pages/AddQue';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={<Protected> <Account /> </Protected>} />
          <Route path='/admin' element={<Protected> <Admin /> </Protected>} />
          <Route path='/addfaculty' element={ <AddFaculty />} />
          <Route path='/addstudent' element={<Protected> <AddStudent /> </Protected>} />
          <Route path='/exam' element={<Protected> <ExamSchedule /> </Protected>} />
          <Route path='/addque' element={<Protected> <AddQue /> </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
