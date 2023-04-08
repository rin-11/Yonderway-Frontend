import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

//bella test
//IMPORT COMPONENTS
import Header from './components/header';
import User from './components/user';

//IMPORT PAGES 
import Main from './pages/main';

import Register from './pages/userpages/register';
import Login from './pages/userpages/login';


import Hotels from './pages/hotels';
import Restaurants from './pages/restaurants';
import Attractions from './pages/attractions';


function App() {
  return (
    <div className="App">
      
      <br></br>

      <User/>
      
      <br></br>

      <Header/>
      
      <br></br>

      <Routes>

        <Route path="/" element={<Main/>}/>;

        <Route path="/register" element={<Register/>}/>;
        <Route path="/login" element={<Login/>}/>;

        <Route path="/attractions" element={<Attractions/>}/>;
        <Route path="/hotels" element={<Hotels/>}/>;
        <Route path="/restaurants" element={<Restaurants/>}/>;
        
      </Routes>
    </div>
  );
}

export default App;
