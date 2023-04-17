import { useEffect, useState } from "react"
import {Link, Routes, Route} from 'react-router-dom'
import Register from '../pages/userpages/register';
import Login from '../pages/userpages/login';

//Account: Create account and sign in 
//Once the user creates an account: add conditional to hide sigin/create acount buttons and replace with login /log out buttons 

const Usernav = (props) => {
  const [user, setUser] = useState(null)
  const URL = "http://localhost:3000/register/"

  const getUser = async() => {
    const response = await fetch(URL)
    const data = await response.json()
    setUser(data.data)
}
  const createUser = async (user) => {
    await fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    getUser();
  };
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <nav className='usernav'>
      {/* <Routes>
        <Route path='/register'
        element={<Register user={user}
        createUser={createUser}/>}/>
      </Routes> */}
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