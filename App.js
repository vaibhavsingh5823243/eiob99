import { Routes, Route } from 'react-router-dom';

import './bootstrap/bootstrap.css';
import './App.css';
import Login from './components/loginSignup/Login';

import Navbar from './components/Navbar/Navbar';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
    
    <Navbar/>
    
    
    <Routes>
      <Route element={<Login />} path="login" />;
      <Route element={<Courses/>} path='courses'/>;
    </Routes>
    
    </>
  );
}

export default App;
