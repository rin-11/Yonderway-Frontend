import {useState} from 'react'
import { Link } from "react-router-dom";
import api from '../../utils/api';
import axios from 'axios';


//Jess to style 

const Register = (props) => {
  const baseURL = process.env.REACT_APP_API_URL
  // create states to hold username and password
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = async (e) => {
    e.preventDefault()
    fetch(baseURL + '/user/register', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
      localStorage.setItem('userInfo',JSON.stringify(resJson)); 
    })
  };


  return (
    <>
    <section className='grid-register'>
      <div className='grid-welcome'>
      <h1>Welcome to Yonderway</h1>
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
          <h4>Create an account to continue access</h4>
      </div>

      <div className='grid-user'>
        
      <form onSubmit={submitHandler}>
        <div>
          <h1 className='user-pw'>Username</h1><br/>
          <input className='user-input'
            type="text"
            value={username}
            name="username"
            placeholder="Enter Display Name"
            onChange={(e) => setUsername(e.target.value)}
            // onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
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
        <div>
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
        <input className="user-pw-bttn" type="submit" value="Register" />
      </form>
      </div>
    </section>
    </>
  )
};

export default Register;