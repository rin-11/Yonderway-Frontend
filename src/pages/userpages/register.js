import {useState} from 'react'
import { Link } from "react-router-dom";
import api from '../../utils/api';
import axios from 'axios';

//Jess to style 

const Register = (props) => {
  // create states to hold username and password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // create state for login errors and loading
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    // try/catch to call API
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      setLoading(true);
      const { data } = await api.post(`${process.env.REACT_APP_API_URL}/api/users/`, {
        username, password
      }, config)
      setLoading(false) // once request is complete
  } catch (error) {
    setError(error.response.data.message)
    }
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
