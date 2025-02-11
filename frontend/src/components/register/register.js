import React,{useState} from 'react'
import "./register.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'
const Register = () =>
{
    const history =useNavigate()
    const [ user,setUser] = useState( {
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
       }
       const register = () =>
       {
         const { name ,email,password , reEnterPassword}=user
    if(name && email && password && (password === reEnterPassword)){
        alert("posted")
        axios.post("http://localhost:9002/register",user)
        .then(res => alert(res.data.message))
                  history("/login")
    }else{
        alert("invlid input")
    } 
          
       }
    return(
        <div className="register">
            {console.log("User",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder=" Your Name" onChange={handleChange}></input>
        <br></br>
        <input type="text" name="email" value={user.email} placeholder=" Your Email" onChange={handleChange}></input>
        <br></br>
        <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={handleChange}></input>
        <br></br>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Password" onChange={handleChange}></input>
        <br></br>
        
        <center><Button variant="contained" color="primary" style={{backgroundColor: '#12824C', color: '#FFFFFF' ,minWidth:"250px"}}onClick={register}>Register</Button></center>
            <br></br>
            <center><Button variant="contained">Or</Button></center>
            <br></br>
        <center><Button variant="contained" color="primary" style={{backgroundColor: '#12824C', color: '#FFFFFF',minWidth:"250px"}}  onClick={() => history("/login")}>Login</Button></center>
    </div>
    )
}

export default Register