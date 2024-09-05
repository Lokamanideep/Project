import React from 'react'
import { Box } from '@mui/system'
function Aboutus() {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Box
        m={1} pt= {3}       //margin
        display="flex"
            justifyContent="flex-end"
        alignItems="flex-end"
        justify-content= "space-between"
        sx={{  backgroundColor: 'orange' ,}}
        >
      <h4> <p>Every day we wake up to the fact that more than 250 million lives are part of our family called LIC.

We are humbled by the magnitude of the responsibility we carry and realise the lives that are associated with us are very valuable indeed.

Though this journey started over six decades ago, we are still conscious of the fact that, while insurance may be a business for us, being part of millions of lives every day for the past 65 years has been a process called TRUST.

A true saga Of Trust.</p></h4>
</Box>
    </div>
  )
}

export default Aboutus