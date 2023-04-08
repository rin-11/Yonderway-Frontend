import React from "react";
import { Link } from "react-router-dom";

//Account: Create account and sign in 
//Once the user creates an account: add conditional to hide sigin/create acount buttons and replace with login /log out buttons 

const User = (props) => {
  return (
    <nav className='user'>

        <Link to='/register'>
            <div>Register</div>
        </Link>

        <Link to='/login'>
            <div>Login</div>
        </Link>
        
    </nav>
  );
};

export default User;