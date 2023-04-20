import {useState} from 'react'
import { Link } from "react-router-dom";
import Usernav from '../../components/user';
import axios from 'axios';


//Jess to style 


const Login = (props) => {
  
  // create states to hold username and password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // create state for login errors and loading
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-type':'application/json'
          }
        };
        setLoading(true) // while request is being made 
  
        const { data } = await axios.post('/api/users/login', {
          username, password
        }, config );
        // store user data locally as string
        localStorage.setItem('userInfo',JSON.stringify(data)); 
        setLoading(false) // once request is complete
    } catch (error) {
      setError(error.response.data.message)
    }
    // console.log(username, password) // test
  };
  
  return (
  
    <section className='grid-register'>
      <div className='grid-welcome'>
      <h1>Hello Again!</h1>
      <p>YonderWay, the path less trod,
          A journey to the unknown abroad.
          With open eyes and open heart,
          The world unfolds, a work of art.
          Amidst the mountains, fields, and streams,
          The traveler roams and freely dreams.
          Of all the wonders yet to see,
          And all the places yet to be.
          YonderWay, the call to roam,
          To leave behind what was once known.
          And venture forth to find a way,
          To live a life, untamed and free.</p>
          <h4>Sign in to continue access</h4>
      </div>

      <div className='grid-user'>
      <form onSubmit={submitHandler}>
      <div className='username-input'>
      <h1 className='user-pw'>Username</h1><br/>
          <input className='user-input'
            type="text"
            value={username}
            name="username"
            placeholder="enter username"
            onChange={(e) => setUsername(e.target.value)}
            // onChange={handleChange}
          />
          </div>
          <br></br>
          <div className='password-input'>
          <h1 className='user-pw'>Password</h1><br/>
          <input className='user-input'
             type="text"
             value={password}
             name="password"
             placeholder="enter password"
             onChange={(e) => setPassword(e.target.value)}
             // onChange={handleChange}
          />
          </div>
          <br></br>
          <input className="user-pw-bttn" type="submit" value="Login" />
          </form>
      </div>
      </section> 
      
)}

export default Login;
