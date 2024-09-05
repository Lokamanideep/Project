import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Login from './components/login/login';
import Register from './components/register/register';
import Homepage from './components/homepage/homepage';
import Home from './components/Home';
import Healthinsurance from './components/Healthinsurance';
import Lifeinsurance from './components/Lifeinsurance';
import PlansAvailable from './components/PlansAvailable';
import CustomizedSteppers from './components/Steps';
function App() {
  const [user ,setLoginUser] = useState({})
  return (
      
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='Click Here' element={<payment/>}></Route>
        <Route path='Home' element={<Home/>}></Route> 
        <Route path='Lifeinsurance' element={<Lifeinsurance/>}></Route> 
      <Route path='Healthinsurance' element={<Healthinsurance/>}></Route> 
      <Route path='PlansAvailable ' element={<PlansAvailable />}></Route>
      <Route path='Steps' element={<CustomizedSteppers/>}></Route>
      
      <Route exact path ="/" element={
          user && user._id 
          ?
        <Homepage setLoginUser={setLoginUser}/>
        :
        <Login setLoginUser={setLoginUser}/>
      }></Route>
        <Route path ="/login" element={
        <Login setLoginUser={setLoginUser}/>}></Route>
        <Route path ="/register" element={<Register/>}></Route>


     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;