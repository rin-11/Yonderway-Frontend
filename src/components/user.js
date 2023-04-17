import React from "react";
// import { Link } from "react-router-dom";
import { useLocation, Link } from "react-router-dom";

//Account: Create account and sign in 
//Once the user creates an account: add conditional to hide sigin/create acount buttons and replace with login /log out buttons 

const Usernav = (props) => {
  return (
    <nav className='usernav'>
        <Link to='/register'>
            <button id="user">
            <img src="https://d1k5j68ob7clqb.cloudfront.net/processed/meta/D3s78Z14t2GB91wqCr.png"  id="icon2"></img>
              Register</button>
        </Link>

        <Link to='/login'>
            <button id="user">
            <img src="https://cdn-icons-png.flaticon.com/512/54/54874.png"  id="icon2"></img>
              Login</button>
        </Link>

        <Link to='/'>
            <button id="user">
            <img src="https://cdn-icons-png.flaticon.com/512/154/154347.png"  id="icon2"></img>
              Logout </button>
        </Link>

        <Link to='/wishlist'>
            <div className="wishlist">
            <img src="https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png"  id="icon2"></img>

              <h1 className="list">Wishlist</h1></div>
        </Link> <br/>
    </nav>
  );
};

export default Usernav;