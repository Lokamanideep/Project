import React from 'react'
import h4 from './images/h4.jpg'
import c2 from'./images/c2.jpg'
import c1 from './images/c1.jpg'
import h2 from './images/h2.jpg'
import h9 from './images/h9.jpg'
import c3 from './images/c3.jpg'
import c5 from './images/c5.jpg'
import c6 from './images/c6.jpg'

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import { Button, Table } from '@mui/material';
import Cloud from '@mui/icons-material/Cloud';
import { Grid } from '@material-ui/core';
import Link from '@mui/material/Link';
import { Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Healthinsurance from './Healthinsurance';
import { Box } from '@mui/system';
import l1 from './images/l1.jpg';
import Login from './login/login'
import { useNavigate } from 'react-router-dom'
import { payment } from './payment'
function Home() 
{
  const history =useNavigate()
  return (
    <div>
      <br></br>
      <Box
        m={1}
       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-end"
        
        >
      <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          <ListItemText><img src={h4} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='white'>
         <h4> <b>Want to apply for health insurance</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} onClick={() => history("/payment")}>
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    <Box
    m={1}
    //margin
     display="flex"
         justifyContent="flex-end"
     alignItems="flex-end"
     justify-content= "space-end"


    >
        
        <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          <ListItemText><img src={h2} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color='white'>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='white'>
         <h4> <b>Want to apply for Life Insurance</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    
    <Routes>

      <Route path='Click Here' element={<Login/>}></Route>
      <Route path='Click Here' element={<payment/>}></Route>
      </Routes> 
      
    </Box>
    <Box

m={1}
//margin
 display="flex"
     justifyContent="flex-end"
 alignItems="flex-end"
 justify-content= "space-end"
    >
        
        <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
      <MenuItem>
          <ListItemText><img src={h9} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color='white'>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='whitesmoke'>
         <h4> <b>Apply For Both</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 

    </Box>
    <Box
    m={1}
    //margin
     display="flex"
         justifyContent="flex-end"
     alignItems="flex-end"
     justify-content= "space-end"
    >
        
        <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          <ListItemText><img src={c1} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color='white'>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='white'>
         <h4> <b>Do You Have Any Questions</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 

    </Box>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 
      </Box>
      
      <Box
        m={1}
       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-end"
        
        >
          <Box
        m={1}
       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-end"
        
        >

 <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          <ListItemText><img src={c2} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color='white'>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='white'>
         <h4> <b>Are you OLD policyHolder</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 
      <br></br>
      

          </Box>

     <Box
      m={1}
       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-end"

     >

     </Box>



      <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          
            
          
          <ListItemText><img src={c3} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color='white'>
           
          </Typography>
        </MenuItem>
        <MenuItem>

          
          <Typography variant="body9" color='white'>
         <h4><b>Are you New policyHolder</b></h4>
          </Typography>
        </MenuItem>
       
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 
      <br></br>
      
      <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          <ListItemText><img src={c5} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color='white'>
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='white'>
         <h4> <b>Check plans Available</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 
      <br></br>
      
      <Grid container justifyContent="center">
          <Paper sx={{ width: 322, maxWidth: '100%' ,backgroundColor: 'black', borderColor: 'green'}}>
      <MenuList>
        <MenuItem>
          <ListItemText><img src={c6} width="250" height="150"/>,</ListItemText>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant="body5" color='white'>
         <h4> <b>Premium</b></h4>
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
        <Link to="Login">
        <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} >
              Click Here</Button></center>
          </Link>
        </MenuItem>
      </MenuList>
    </Paper>
    </Grid>
    <Routes>
      <Route path='Click Here' element={<Login/>}></Route>
      </Routes> 
      <br></br>
      
      </Box>
    </div>
    
  )
}

export default Home