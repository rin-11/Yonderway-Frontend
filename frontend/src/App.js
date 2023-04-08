import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";


//IMPORT COMPONENTS
import Header from './components/header';

//IMPORT PAGES 
import Main from './pages/main';
import Hotels from './pages/hotels';
import Restaurants from './pages/restaurants';
import Attractions from './pages/attractions';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>;
        <Route path="/attractions" element={<Attractions/>}/>;
        <Route path="/concerts" element={<Concerts/>}/>;
        <Route path="/hotels" element={<Hotels/>}/>;
        <Route path="/restaurants" element={<Restaurants/>}/>;
  
      </Routes>
    </div>
  );
}

export default App;
