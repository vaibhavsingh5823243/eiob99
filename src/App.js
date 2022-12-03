import { Routes, Route } from 'react-router-dom';

import './bootstrap/bootstrap.css';
import './App.css';
import VideoPalyer from './elements/VideoPalyer';
import Login from './components/loginSignup/Login';

import Navbar from './components/Navbar/Navbar';
import Courses from './components/courses/Courses';
import Signup from './components/loginSignup/Signup';

function App() {
  return (
    <>
    
    <Navbar/>
    
    
    <Routes>
      <Route path="*" element={<div className='display-5 font-bolder text-center text-e9-primary'>404</div>} />
      <Route path="/play" element={<VideoPalyer />} />
      <Route element={<Login />} path="login" />;
      <Route element={<Courses/>} path='courses'/>;
      <Route element={<Signup/>} path = 'register'/>;
    </Routes>
    
    </>
  );
}

export default App;
