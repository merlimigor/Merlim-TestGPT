import React from 'react';



/* import Navbar from './component/Navbar' */
/* import About from './pages/About'; */
import Home from './component/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';

function App() {
  return (

    <div>
      <Home>
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<Home />} />
          </Routes>
        </BrowserRouter>

      </Home>

    </div>


  );
}

export default App;