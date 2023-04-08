import React from "react";
import { Link } from "react-router-dom";

//Account: Create account and sign in 
//Once the user creates an account: add conditional to hide sigin/create acount buttons and replace with login /log out buttons 

const Usernav = (props) => {
  return (
    <nav className='usernav'>

        <Link to='/register'>
            <div>Register</div>
        </Link>

        <Link to='/login'>
            <div>Login</div>
        </Link>   

        <Link to='/wishlist'>
            <div>User Wishlist</div>
        </Link>   

    </nav>
  );
};

export default Usernav;