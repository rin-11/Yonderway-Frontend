import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Usernav from '../../components/user';
import { Link } from 'react-router-dom';


//Jess to style 

const Register = (props) => {

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [newUser, setNewUser] = useState([false]);
    const [newUser, setNewUser] = useState({
      username: "",
      password: ""
  })
      // handleChange function 
      const handleChange = (event) => {
        setNewUser({...newUser, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      props.createUser(newUser)
      setNewUser({
        username: "",
        password: ""
      })
  }

  return (
  
    <section>
      <form action="/users/register" method="POST">
      <div className='username-input'>
          <input
            type="text"
            value={newUser.username}
            name="username"
            placeholder="enter username"
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div className='password-input'>
          <input
            type="text"
            value={newUser.password}
            name="password"
            placeholder="enter password"
            onChange={handleChange}
          />
          </div>
          <br></br>
          <input type="submit" value="Register" />
          </form>
      </section>
      
)};

export default Register;
