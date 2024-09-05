import React from 'react'
import h from './images/h.jpg'
import { Box } from '@mui/system'
import { Spacing } from '@mui/system'
function Healthinsurance() {
  return (
    <div>
              <br></br>
        <br></br>
        <Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{  backgroundColor: 'white' ,}}
>
  

<Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
  sx={{  backgroundColor: 'white' ,}}
  >
<p>  
  <h1>Health Insurance</h1>
   <b>Health insurance is a type of insurance that covers medical expenses that arise due to an illness.
     These expenses could be related to hospitalisation costs, cost of medicines or doctor consultation fees.
       <br></br>
     <h2>Types of Health Insurance</h2>
  <br></br>
There are two basic types of health insurance:
   <br></br>
  <h3>1. Mediclaim Plans</h3>
Mediclaim or hospitalisation plans are the most basic type of health insurance plans. 
They cover the cost of treatment when you are admitted to the hospital. The payout is made on actual 
expenses incurred in the hospital by submitting original bills. Most of these plans cover the entire family up 
to a certain limit.
 <br></br>
<h3>2. Critical Illness Insurance Plans</h3>
<br></br>
Critical Illness Insurance Plans cover specific life-threatening diseases. 
These diseases could require prolonged treatment or even change in lifestyle. Unlike hospitalisation plans,
 the payout is made on Critical Illness cover chosen by the customer and not on actual expenses incurred in the hospital.
  The cover gives the flexibility to use the monies for changing lifestyle and medicines. Also it's a substitute for income
   for the time you could not resume work due to illness. Payout under these plans are made on the diagnosis of the disease
    for which the original medical bills are not required.</b>
    <h3>3. Individual Health Insurance</h3>
  <b>You can purchase an individual health insurance policy to provide cover for yourself, your 
  spouse, your children and your parents. These policies typically cover all kinds of medical expenses, 
  including hospitalisation, daycare procedures, hospital room rent and more. Under an individual health insurance plan,
   each member has their own sum insured amount. So, let's say you've taken an individual plan for yourself, your spouse 
   and both your parents with a sum insured of INR 8 lakhs. Each of you will be able to claim a maximum amount of 8 lakhs per
    policy year against your health insurance.</b>
  <br></br>
   
  </p></Box>
  <Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{  backgroundColor: 'green' ,}}
>
  <center>
  <img src={h} width="300" height="300"/>,
  </center>
  </Box>
  <Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{  backgroundColor: 'violet' ,}}
>

  <p>
  <h2>Benefits of Health Insurance</h2>
  <br></br>
   <b>Purchasing health insurance is crucial for a number of reasons. Let's take a look at the most important benefits of our health insurance policies:</b>

<h3>1. Helps Deal with Rising Medical Costs</h3>
<b>People purchase health insurance policies to safeguard their finances against ever-rising medical costs. An accident or medical emergency could end up costing you more than a few thousand rupees. With a medical insurance plan, you enjoy cover for everything from ambulance charges to daycare procedures, making it easier for you to get the care you need to recover.</b>

<h3>2. Critical Illness Cover</h3>
<b>Many health insurance policies will also offer cover for critical illnesses at an additional cost. Given the rising incidence of lifestyle-related diseases today, this is another crucial cover to have. You will be provided with a lump sum payout in case you are diagnosed with any of the covered critical illnesses. These issues are often very expensive</b>
<h3>3. Easy Cashless Claims</h3>
<b>Every health insurance provider will tie-up with a number of network hospitals where you can enjoy cashless claims. This makes the entire process of receiving emergency medical care much easier. At a network hospital, you aren't really required to pay for any of the covered treatments. For all valid claims, we'll take care of the medical costs, without you having to pay for anything, except non-covered expenses and the mandatory deductibles.</b>

<h3>4. Added Protection</h3>
<b>If you enjoy cover under a group health insurance plan, you may wonder why you should purchase your own health insurance policy. Well, individual health insurance plans offer provider more and better cover than group plans. Additionally, if you happen to leave the group at any time, you risk losing the cover, which could make you and your finances vulnerable.</b>



  </p>
  </Box>
</Box>
    </div>
  )
}

export default Healthinsurance