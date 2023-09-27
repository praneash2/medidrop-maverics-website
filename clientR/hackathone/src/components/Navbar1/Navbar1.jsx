import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { createBrowserHistory } from "history";
import { logout } from '../../actions/user.js';
import {useDispatch} from 'react-redux';

import { useNavigate,useLocation } from 'react-router-dom';
//bootstraps
import { Container,Nav,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar1() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [login,setLogin]=useState(false);
  const history = createBrowserHistory();
  let username=JSON.parse(localStorage.getItem('profile'))?.message;
  const Logout=(e)=>{
      setLogin(false);
      dispatch(logout());
      navigate('/login');
  }
  return (
    ((history.location.pathname!=="/login")&&(history.location.pathname!=="/signup"))&&<Navbar  className="me-auto">
        <Container fluid style={{backgroundColor:"black",borderRadius:'30px',padding:"10px",marginRight:"10px",marginLeft:"10px"}}>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav  >
            <Nav.Link style={{color:"white"}} as={Link} to="/">Dashboard</Nav.Link>
            
            <Nav.Link style={{color:"white"}} as={Link} to="/orders">Orders</Nav.Link>
            <Nav.Link style={{color:"white"}} as={Link} to="/appointment">Appointment</Nav.Link>
            
            </Nav>
            
          </Navbar.Collapse>
          {((username)&&(username==="admin"))?<Link to="new_appointment">New Appointment</Link>:<></>}
            {(username)?<div style={{color:"white",fontWeight:'bold',paddingRight:'4px'}}>Room :{username}  <button style={{borderRadius:'10px',fontWeight:'bold',backgroundColor:'white',color:'black',padding:'4px'}} onClick={Logout}>logout</button></div>:<div><Link  to='/login'>Login</Link></div>}
          {/* <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
          <Link to='events'>events</Link>
          <Link to='history'>history</Link> */}
        </Container>
    </Navbar>
    
  )
}
