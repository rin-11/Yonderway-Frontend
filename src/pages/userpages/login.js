import {useState} from 'react'
import { Link } from "react-router-dom";
import api from '../../utils/api';
import axios from 'axios';


//Jess to style 


  const Login = (props) => {
  const baseURL = process.env.REACT_APP_API_URL
  // create states to hold username and password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const submitHandler = async (e) => {
    e.preventDefault();
    fetch(baseURL + '/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      })
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
      <div className='email-input'>
      <h1 className='user-pw'>Email</h1><br/>
          <input className='user-input'
           type="text"
           value={email}
           name="email"
           placeholder="Enter Email"
           onChange={(e) => setEmail(e.target.value)}
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
            placeholder="Enter Password"
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
