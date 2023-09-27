import React from 'react'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Orders from './components/Orders/Orders.jsx';
import Navbar1 from './components/Navbar1/Navbar1.jsx';
import Appointment from './components/Appointment/Appointment.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewAppointment from './components/NewAppointment/NewAppointment.jsx';
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar1></Navbar1>
      
      <Routes>
           <Route path="/login" element={<Login/>}></Route> 
          <Route path="/signup" element={<Signup/>}></Route> 
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
          <Route path="/appointment" element={<Appointment/>}></Route>
          <Route path="new_appointment" element={<NewAppointment/>}></Route>
      </Routes> 
     
    </BrowserRouter>
      
      
    </div>
  )
}
