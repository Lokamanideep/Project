import React from 'react'
import { Box } from '@mui/system'
import { Grid } from '@mui/material'
import c from './images/c.jpg'
function Contactus() {
  return (
    <div>
      <Box
        m={1} pt= {3}       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        
        justify-content= "space-between"
        sx={{  backgroundColor: 'white' ,}}
       
        >
          <Grid container justifyContent="flex-start">
        <Box
        m={1}        //margin
        display="flex"
            justifyContent="flex-start"
        alignItems="flex-start"
        justify-content= "space-between"
        sx={{  backgroundColor: 'orange' ,}}
            >
           <p><h1><b>Give us a call on </b></h1>
                      <br></br>
                      <h4>Claim Care cell - Open 24 X 7 (except national holidays)</h4>
               <h4> 1860 266 7766* (For calls within India)</h4>
           <h5>+91 22 6193 0777* (For calls outside India)</h5>
           </p>
           </Box>
           </Grid>
           <Box
        m={1} pt= {3}       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        
        justify-content= "space-between"
        sx={{  backgroundColor: 'white' ,}}
       
        >
           <img src={c} width="300" height="300"/>,
       </Box>
           <Grid container justifyContent="flex-end">
           <Box
        m={1} pt= {3}       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-start"
        justify-content= "space-between"
        sx={{  backgroundColor: 'orange' ,}}
        >
           <p><h1><b>For service related queries</b></h1>
                      <br></br>
                      <h4>Contact us to this number</h4>
               <h4> 1860 266 7766</h4>
           <h5>If you are an advisor, please call on 1860 266 7766 and select option 7 on the IVR menu.</h5>
           </p>
        </Box>
        </Grid>
        </Box>
    </div>
  )
}

export default Contactus