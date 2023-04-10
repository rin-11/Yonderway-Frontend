import React from "react";
import { Link } from "react-router-dom";



const Header = (props) => {

  return (
    <div className="nav">
      <ul>
      <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/attractions">
          <div>Attractions</div>
        </Link>
        <Link to="/hotels">
          <div>Hotels</div>
        </Link>
        <Link to="/restaurants">
          <div>Restaurants</div>
        </Link>
        </ul>
    </div>

  );
};

export default Header;