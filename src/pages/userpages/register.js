import {useState} from 'react'
import { Link } from "react-router-dom";

//Jess to style 

const Register = (props) => {
  
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
});

// handleChange function for form
const handleChange = (event) => {
    setNewUser({...newUser, [event.target.username]: event.target.value})
}

// handleSubmit function for form
const handleSubmit = (event) => {
    event.preventDefault()
    props.createUser(newUser)
    setNewUser({
        username: "",
        password: "",
    })
}
  
  return (
  
    <section>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={newUser.username}
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          
          <input
            type="text"
            value={newUser.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />

          <input type="submit" value="Register" />
        </form>

      </section>
      
)}

export default Register;
