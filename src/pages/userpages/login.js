import {useState} from 'react'
import { Link } from "react-router-dom";

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
  
    <section>
      <form action="/login" method="POST">
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
          <input type="submit" value="Login" />
          </form>
      </section>
      
      
)}

export default Login;
