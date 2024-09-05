import React from 'react'
import l from './images/l.jpg'
import { Box } from '@mui/system'
function Lifeinsurance() {
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
  sx={{  backgroundColor: 'lightgreen' ,}}
>

<Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{  backgroundColor: 'violet' ,}}

>
<p>

  <h2>Why Do You Need Life Insurance?</h2>
  <br></br>
   <h3>1. Secure your family's financial future</h3>
Life insurance is all about securing you and your family financially. All parents want their children to
 be taken care of even when they are not around. Life insurance makes sure your loved ones won't suffer financially
  in your absence.
     <br></br>
   <h3>2. Accomplish your financial goals</h3>
   We all have some goals in life, for which money needs to be saved. Life insurance plans
    help you achieve those goals by helping you build a financial corpus with the protection of a life cover. 
    Life insurance plans inculcate a habit of disciplined saving. Paying a little amount as an insurance premium 
    each month will help you accumulate funds. What's even better is that this small monthly amount only keeps growing.
     So years from now, you'll have enough wealth accumulated to accomplish your more substantial and long-term financial goals.
    <br></br>
    <h3>3 . Brings peace of mind</h3>
      Having life insurance will give you peace of mind. Life is uncertain, and life 
      insurance can offer financial assistance to your family when you are no longer around. 
      You can also plan your retirement by taking a retirement plan where you will receive a monthly income.
      <br></br>
    <h3>4. Save tax</h3>
    Generally, you can claim an income tax deduction on your life insurance premiums
     under Section 80Cof the Income Tax Act, 1961**. Pay-outs for death claims are tax-free under 
     Section 10(10D) of the Income Tax Act, 1961**.
       <br></br>
     
  </p></Box>
  <Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{  backgroundColor: 'lightgreen' ,}}
>

  
<img src={l} width="600" height="600"/>,
</Box>
<Box
     m={1}
 //margin
  display="flex"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{  backgroundColor: 'lightblue' ,}}
>
  <p><h2>Reasons to Have a Life Insurance Plan</h2>
     <br></br>
  <h3>1. Long term financial goal</h3>
Life insurance plans help you create a substantial financial corpus for your long term financial goals by helping save money with the protection of life cover.
   <br></br>
 <h3>2. Protect the child's future</h3>
Every parent wants to provide their child with the best possible future. Life insurance plans ensure your child to have the best possible future even when you are not around.
  <br></br>
 <h3>3. Loans and liabilities</h3>
If you have bought a loan then you should always consider buying a term plan. It makes sure that the burden of your loan doesn’t fall up on your dependents in your absence. Term insurance plans are the most affordable way to protect home loan amount and safeguard the shelter of policyholder's family in case of his/ her untimely death.
  <br></br>
 <h3>4. Child’s education planning</h3>
Child education plans help you save and build a financial corpus for your child’s future education expenses. These plans provide life cover so that the child gets the sum assured even in the case of policyholder’s untimely demise. 
 </p>
 
  
  </Box>
</Box>
    </div>
  )
}

export default Lifeinsurance