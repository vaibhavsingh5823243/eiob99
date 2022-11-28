import { Routes, Route } from 'react-router-dom';

import './bootstrap/bootstrap.css';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="*" element={<div className='display-5 font-bolder text-center text-e9-primary'>404</div>} />
    </Routes>
  );
}

export default App;
