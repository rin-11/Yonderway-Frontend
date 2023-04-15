import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

// IMPORT COMPONENTS
import Header from './components/header';
import Usernav from './components/user';
import Footer from './components/footer';

// IMPORT PAGES 
import Main from './pages/main';
import Activity from './pages/activity';
import Register from './pages/userpages/register';
import Login from './pages/userpages/login';
import Wishlist from './pages/userpages/wishlist';

import Hotels from './pages/hotels';
import Restaurants from './pages/restaurants';
import Attractions from './pages/attractions';
import City from './pages/City'; // Import the City component

function App() {

  return (
    <>
      <div className="App">

        <br></br>

        <Usernav />

        <br></br>

        <Header />

        <br></br>

        <Routes>

          <Route path="/" element={<Main />} />;

          <Route path="/register" element={<Register />} />;
          <Route path="/login" element={<Login />} />;

          <Route path="/attractions" element={<Attractions />} />;
          <Route path="/hotels" element={<Hotels />} />;
          <Route path="/restaurants" element={<Restaurants />} />;
          <Route path="/wishlist" element={<Wishlist />} />;

          <Route path="/city/:cityId" element={<City />} />; // Add the route for the city page

        </Routes>

        <br></br>

        <Footer />
      </div>
    </>
  );
}

export default App;
