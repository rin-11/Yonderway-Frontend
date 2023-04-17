import React from "react";
import { useLocation, Link } from "react-router-dom";


const Footer = (props) => {
  const loc = useLocation();

  if (loc.pathname === '/') {
    return null;
  }
  else {
    return (
      <>
      <section className="nav">
          <Link to="/">
            <div className="main-footer">MAIN PAGE</div>
          </Link>
         <Link to="/wishlist">
           <div className="wishlist-footer">WISHLIST</div>
         </Link>
     </section>
     </>
    );
  }
  
};

export default Footer;