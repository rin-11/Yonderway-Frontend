import React from "react";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <div className="nav">
        <Link to="/hotels">
          <div>Hotels</div>
        </Link>
        <Link to="/attractions">
          <div>Attractions</div>
        </Link>
        <Link to="/restaurants">
          <div>Restaurants</div>
        </Link>
    </div>
  );
};

export default Header;