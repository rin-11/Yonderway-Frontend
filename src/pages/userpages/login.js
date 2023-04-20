import {useState} from 'react'
import { Link } from "react-router-dom";
import Usernav from '../../components/user';

//Jess to style 

const Login = (props) => {
  
  const [newForm, setNewForm] = useState({
    username: "",
    password: ""
})

    const handleChange = (event) => {
      setNewForm({...newForm, [event.target.name]: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    props.findUser(newForm)
    setNewForm({
      username: "",
      password: ""
    })
}
  
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
      <form action="/login" method="POST">
      <div className='username-input'>
      <h1 className='user-pw'>Username</h1><br/>
          <input className='user-input'
            type="text"
            value={newForm.username}
            name="username"
            placeholder="enter username"
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div className='password-input'>
          <h1 className='user-pw'>Password</h1><br/>
          <input className='user-input'
            type="text"
            value={newForm.password}
            name="password"
            placeholder="enter password"
            onChange={handleChange}
          />
          </div>
          <br></br>
          <input className="user-pw-bttn" type="submit" value="Login" />
          </form>
      </div>
      </section>
      
      
)}

export default Login;
