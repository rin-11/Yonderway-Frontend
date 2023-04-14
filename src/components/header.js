import React from "react";
import { Link } from "react-router-dom";



const Header = (props) => {

  return (
    <>
    <div className="nav">
      <ul>
        <Link to="/attractions">
          <img src="https://static.thenounproject.com/png/4538455-200.png" id="icon" />
          <h3>Attractions</h3>
        </Link>
        <Link to="/hotels">
          <img src="https://static.thenounproject.com/png/1650638-200.png" id="icon"/>
          <h3>Hotels</h3>
        </Link>
        <Link to="/restaurants">
          <img src="https://static.thenounproject.com/png/1062711-200.png" id="icon" />
          <h3>Restaurants</h3>
        </Link>
        </ul>
    </div>
    </>
  );
};

export default Header;