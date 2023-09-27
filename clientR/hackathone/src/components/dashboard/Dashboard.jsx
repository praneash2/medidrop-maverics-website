import React, { useEffect,useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { get_dashboard } from '../../actions/dashboard.js';
import Card_dashboard from './Card_dash/Card_dash.jsx';
//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Dashboard() {
    const dispatch=useDispatch();
    
    const {data}=useSelector((state)=>(state.dashboard));
    let username=JSON.parse(localStorage.getItem('profile'))?.message;
    useEffect(()=>{
        dispatch(get_dashboard());
        
    },[]);
    
  return (
    
    <Container>{(username)?<Row lg={3} md={2}>
      {
       data.map((e)=>(<Col><Card_dashboard data={e}> </Card_dashboard></Col>))
      }
  </Row>:<div>please login</div>}
  </Container>
  )
}
