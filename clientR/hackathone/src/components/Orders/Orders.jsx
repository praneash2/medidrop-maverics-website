import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { get_orders } from '../../actions/orders.js';
import Order from './Order/Order.jsx';
//bootstaps
import { Container,Card,Button,Col,Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Orders() {
    const dispatch=useDispatch();
    let username=JSON.parse(localStorage.getItem('profile'))?.message;
    const {data}=useSelector((state)=>(state.orders));
    useEffect(()=>{
        dispatch(get_orders(username));
    },[username]);
    
  return (
    <Container >{(username)?<Row lg={3} md={2}>
        {
        data.map((e)=>(<Col> <Order data={e} ></Order> </Col>))
        }
    </Row>:<div>please login</div>}
    </Container>
  )
}
