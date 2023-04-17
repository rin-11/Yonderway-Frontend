import React from "react";
import { useLocation, Link } from "react-router-dom";

const Header = (props) => {
  const loc = useLocation();
  const searchQuery = new URLSearchParams(loc.search).get('city');

  if (loc.pathname === '/' || loc.pathname.startsWith('/city/')) {
    return null;
  }
  else {
    return (
      <>
        <section className="nav-header">
          {/* <ul className="header"> */}
            <Link to={`/attractions?city=${searchQuery}`} className="category1">
              <img src="https://static.thenounproject.com/png/4538455-200.png" id="icon" />
              <h3 className="category">Attractions</h3>
            </Link>
            <Link to={`/hotels?city=${searchQuery}`} className="category1">
              <img src="https://static.thenounproject.com/png/1650638-200.png" id="icon" />
              <h3 className="category">Hotels</h3>
            </Link>
            <Link to={`/restaurants?city=${searchQuery}`}>
              <img src="https://static.thenounproject.com/png/1062711-200.png" id="icon" />
              <h3 className="category">Restaurants</h3>
            </Link>
          {/* </ul> */}
        </section>
      </>
    );
  }
};

export default Header;