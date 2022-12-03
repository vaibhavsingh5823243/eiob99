import { Routes, Route } from 'react-router-dom';

import './bootstrap/bootstrap.css';
import './App.css';
import Login from './components/loginSignup/Login';

import Navbar from './components/Navbar/Navbar';
import Courses from './components/courses/Courses';
import Signup from './components/loginSignup/Signup';

function App() {
  return (
    <>
    
    <Navbar/>
    
    
    <Routes>
      <Route element={<Login />} path="login" />;
      <Route element={<Courses/>} path='courses'/>;
      <Route element={<Signup/>} path = 'register'/>;
    </Routes>
    
    </>
  );
}

export default App;
