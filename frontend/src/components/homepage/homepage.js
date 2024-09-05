import React from 'react'
import ImageSlider from '../ImageSlider';
import ResponsiveAppBar from '../ResponsiveAppBar';
import Lifeinsurance from '../Lifeinsurance';
import Healthinsurance from '../Healthinsurance';
import PlansAvailable from '../PlansAvailable';
import CustomizedSteppers from '../Steps';
import "./homepage.css"
import Home from '../Home';
import { Box } from '@mui/system';
import { Button, ButtonGroup, Grid, Paper } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import { payment } from '../payment';
import { Routes } from 'react-router-dom';
const slides =[
    {url:"http://localhost:3000/c1.jpeg",title:"beach"},
    {url:"http://localhost:3000/c2.jpeg",title:"beach"},
    {url:"http://localhost:3000/c3.jpeg",title:"beach"},
    {url:"http://localhost:3000/c4.jpeg",title:"beach"},
    {url:"http://localhost:3000/c5.jpeg",title:"beach"},
  ];
  const containerStyles ={
    width:"500px",
    height:"280px",
    margin:"0 auto",
  };
const Homepage = ({setLoginUser}) =>
{
    
    return(
      
        <div className="homepage">
            <Box
        m={1}        //margin
        display="flex"
            justifyContent="center"
        alignItems="center"
        
        sx={{  backgroundColor: 'white' ,width: 1000,}}
        
        >
          <h1 >HEALTH AND LIFE INSURANCE SYSTEM</h1>
          </Box>
      <div style ={containerStyles}>
        <ImageSlider slides={slides}/>

      </div>
    
    
        
        <center><Box
        m={1}        //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-between"
        sx={{  backgroundColor: 'pink' ,width: 1500,}}

        >
         <br></br>
          
          
         
   <Grid container justifyContent="flex-start">
          
          <ResponsiveAppBar></ResponsiveAppBar>
          <styles>
            <center>
          <h1 color='blue'>Steps to Buy Insurance</h1>
          </center>
          </styles>
          <Box
        m={1}        //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-between"
        sx={{  backgroundColor: 'pink' ,width: 1500,}}

        >
          
         <CustomizedSteppers/>
         </Box>
          </Grid>
</Box></center>

     
      <Routes> 
      <Route path='Home' element={<Home/>}></Route> 
      <Route path='Lifeinsurance' element={<Lifeinsurance/>}></Route> 
      <Route path='Healthinsurance' element={<Healthinsurance/>}></Route>
      <Route path='PlansAvailable' element={<PlansAvailable/>}></Route>
      <Route path='Steps' element={<CustomizedSteppers/>}></Route> 
      </Routes>
     
            <center><Button variant="contained" color="primary" sx={{ height: 40 ,color: 'white', backgroundColor: 'blue', borderColor: 'green'}} onClick={() => setLoginUser({})}>
              Logout</Button></center>
             
        </div>
    )
}
export default Homepage