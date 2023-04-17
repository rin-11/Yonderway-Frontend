import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Usernav from '../../components/user';
import { Link } from 'react-router-dom';


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
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      props.createUser(newForm)
      setNewForm({
        username: "",
        password: ""
      })
  }

  return (
  
    <section>
      <form action="/register" method="POST">
      <div className='username-input'>
          <input
            type="text"
            value={newForm.username}
            name="username"
            placeholder="enter username"
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div className='password-input'>
          <input
            type="text"
            value={newForm.password}
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
