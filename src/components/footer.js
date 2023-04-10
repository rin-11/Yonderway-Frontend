import React from "react";
import { useLocation, Link } from "react-router-dom";


const Footer = (props) => {
  const loc = useLocation();

  if (loc.pathname === '/') {
    return null;
  }
  else {
    return (
      <div className="nav">
          <Link to="/">
            <div>Back to Main</div>
          </Link>
      </div>
    );
  }
  
};

export default Footer;