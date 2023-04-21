import {useState} from 'react'
import { Link } from "react-router-dom";
import api from '../../utils/api';
import axios from 'axios';


//Jess to style 

const Register = (props) => {
  const baseURL = process.env.REACT_APP_API_URL
  // create states to hold username and password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const submitHandler = async (e) => {
    e.preventDefault()
    fetch(baseURL + '/api/users', {
      method: 'POST',
      body: JSON.stringify({
        username: e.target.username.value,
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
  
    <section>
      <h1>Register New User</h1>
      <form onSubmit={submitHandler}>
      <div className='username-input'>
        <h4>Username:</h4>
          <input
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
          <h4>Password:</h4>
          <input
            type="text"
            value={password}
            name="password"
            placeholder="enter password"
            onChange={(e) => setPassword(e.target.value)}
            // onChange={handleChange}
          />
          </div>
          <br></br>
          <input type="submit" value="Register" />
          </form>
      </section>
      
)};

export default Register;
