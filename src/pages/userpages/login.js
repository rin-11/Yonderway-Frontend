import {useState} from 'react'
import { Link } from "react-router-dom";

const Login = (props) => {
  
  const [findUser, setfindUser] = useState({
    username: "",
    password: "",
});

// handleChange function for form
const handleChange = (event) => {
    setfindUser({...findUser, [event.target.username]: event.target.value})
}

// handleSubmit function for form
const handleSubmit = (event) => {
    event.preventDefault()
    props.createUser(findUser)
    setfindUser({
        username: "",
        password: "",
    })
}
  
  return (
  
    <section>
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={findUser.username}
            name="username"
            placeholder="username"
            onChange={handleChange}
          />
          
          <input
            type="text"
            value={findUser.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />

          <input type="submit" value="Login" />
        </form>

      </section>
      
)}

export default Login;
