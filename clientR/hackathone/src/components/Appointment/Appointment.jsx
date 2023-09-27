import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { get_appointment } from '../../actions/appointment.js';
import Card_dashboard from './Card_dash/Card_dash.jsx';
//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Appointment() {
    const dispatch=useDispatch();
    let username=JSON.parse(localStorage.getItem('profile'))?.message;
    const {data}=useSelector((state)=>(state.appointment));
    useEffect(()=>{
        dispatch(get_appointment(username));
    },[username]);
    
  return (
    
      
     
     <Container>{(username)?<Row lg={3} md={2}>
      {
      data.map((e)=>(<Col><Card_dashboard data={e}> </Card_dashboard></Col>))
      }
  </Row>:<div>please login</div>}
  </Container>
  )
}


