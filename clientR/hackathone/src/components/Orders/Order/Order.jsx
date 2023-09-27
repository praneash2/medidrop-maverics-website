import React from 'react';
import { delete_orders } from '../../../actions/orders.js';
import { useDispatch } from 'react-redux'
//bootstaps
import { Container,Card,Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Order({data}) {
  const dispatch=useDispatch();
  const Cancel=()=>{
      
      dispatch(delete_orders(data?._id));
  }
  return (
    
    <Container>
      <Card style={{height:'30rem',width:'20rem'}}>
          <Card.Img style={{height:"10rem",width:"100%"}} src={data?.image} alt="oops someting went wrong"/>
        <Card.Body>
        
          <Card.Title >Name of item: {data.nameofitem}</Card.Title>
          <Card.Text>Price: {data.price*data.quantity}</Card.Text>
          <Card.Text>Room number: {data.roomno}</Card.Text>
          <Card.Text>Quantity: {data.quantity}</Card.Text>
          <div style={{display:"flex",justifyContent:"left",flexDirection:'row',gap:'1rem'}}>
          <button style={{backgroundColor:"black",color:'white',border:'none',borderRadius:'3px',padding:'4px'}} onClick={Cancel}>Cancel order</button>
          <button style={{borderRadius:'10px',fontWeight:'bold',backgroundColor:'white',color:'black',padding:'4px'}} onClick={Cancel}>Delivered</button>
          </div>
        </Card.Body>
      </Card>

        {/* <div>name of item: {data.nameofitem}</div>
        <div>price: {data.price}</div> 
        <div>room number: {data.roomno}</div>
        <div>quantity: {data.quantity}</div>  
        <div>status: {data.status}</div>
        <button onClick={Cancel}>cancel</button> */}
    </Container>
  )
}
