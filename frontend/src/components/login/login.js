import React,{useState} from 'react'
import  "./login.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { width } from '@mui/system'
const Login = ({setLoginUser}) =>
{
    const history = useNavigate()
    const [ user,setUser] = useState( {
        email:"",
        password:""
    })
    const handleChange = e =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]: value
        })
       
        
    }
    const login =() => {
        axios.post("http://localhost:9002/login",user)
        .then(res => 
            {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history("/")
            })
    }
    
    
    return(
        
        <div className="login " >
           
            {console.log(user)}
             
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <br></br>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password"></input>
            
            <center><Button variant="contained" color="primary" style={{backgroundColor: '#12824C', color: '#FFFFFF' ,minWidth:"250px"}}onClick={login}>Login</Button></center>
            <br></br>
            <center><Button variant="contained">Or</Button></center>
            <br></br>
            <center><Button variant="contained" color="primary" style={{backgroundColor: '#12824C', color: '#FFFFFF',minWidth:"250px"}}  onClick={() => history("/register")}>Register</Button></center>
        </div>
        
    )
}


export default Login