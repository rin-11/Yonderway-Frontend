import React from "react";
import { Link } from "react-router-dom";

//Account: Create account and sign in 
//Once the user creates an account: add conditional to hide sigin/create acount buttons and replace with login /log out buttons 

const Usernav = (props) => {
  return (
    <nav className='usernav'>
        <Link to='/register'>
            <button id="register">Register</button>
        </Link>

        <Link to='/login'>
            <button id="login">Login</button>
        </Link>

        <Link to='/wishlist'>
            <div id="wishlist">User Wishlist</div>
        </Link> <br/>
    </nav>
  );
};

export default Usernav;