import React from "react";
import { useLocation, Link } from "react-router-dom";

//Bella creates hide and show feature using toggle button
//Bella renders images and title of different things to do by importing from ./index.js

const Header = (props) => {
  const loc = useLocation();
  const searchQuery = new URLSearchParams(loc.search).get('city');

  if (loc.pathname === '/') {
    return null;
  }
  else {
    return (
      <>
        <div>
            <h1 className="name">YONDERWAY</h1>
            <br />
        </div>
        <div className="nav">
          <ul>
            <Link to={`/attractions?city=${searchQuery}`}>
              <img src="https://static.thenounproject.com/png/4538455-200.png" id="icon" />
              <h3>Attractions</h3>
            </Link>
            <Link to={`/hotels?city=${searchQuery}`}>
              <img src="https://static.thenounproject.com/png/1650638-200.png" id="icon" />
              <h3>Hotels</h3>
            </Link>
            <Link to={`/restaurants?city=${searchQuery}`}>
              <img src="https://static.thenounproject.com/png/1062711-200.png" id="icon" />
              <h3>Restaurants</h3>
            </Link>
          </ul>
        </div>
      </>
    );
  }
};

export default Header;