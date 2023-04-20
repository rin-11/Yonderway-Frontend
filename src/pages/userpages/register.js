import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Usernav from '../../components/user';

//Jess to style 

const Register = (props) => {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [newUser, setNewUser] = useState([false]);
  const [newForm, setNewForm] = useState({
    username: "",
    password: ""
  })

  // handleChange function 
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createUser(newForm)
    setNewForm({
      username: "",
      password: ""
    })

    // Call the callback function to toggle the heart image
    props.toggleAddWish();
  }

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
        <form onSubmit={handleSubmit}>
      {/* <form action="/register" method="POST"> */}
        <div>
          <h1 className='user-pw'>Username</h1><br/>
          <input className='user-input'
            type="text"
            value={newForm.username}
            name="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <br></br>
        <div>
        <h1 className='user-pw'>Password</h1><br/>
          <input className='user-input'
            type="text"
            value={newForm.password}
            name="password"
            placeholder="Enter password"
            onChange={handleChange}
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