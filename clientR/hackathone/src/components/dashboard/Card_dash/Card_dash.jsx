import React from 'react'
import {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { post_orders } from '../../../actions/orders.js';
//bootstraps
import { Container,Card,Button,Form,FloatingLabel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Card_dash({data}) {
  const dispatch=useDispatch();
  let username=JSON.parse(localStorage.getItem('profile'))?.message;
  const [FormData,setForm]=useState({
    quantity:"",
    nameofitem:data.nameofitem,
      image:data.image,
      price:data.price,
      roomno:username
    } );

    
  const handleChange=(e)=>{
      
      setForm({...FormData,[e.target.name]:e.target.value});
    
          
  }  
  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(post_orders(FormData));
   
    setForm({
      quantity:"",
      nameofitem:data.nameofitem,
        image:data.image,
        price:data.price,
        roomno:data.username
      } );
    
    }


  return (
    
    <Container>
      <Card style={{height:'auto',width:'20rem'}}>
          <Card.Img style={{height:"10rem",width:"100%"}} src={data?.image} alt="oops someting went wrong"/>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
          <Card.Title >Item Name - {data.nameofitem}</Card.Title>
          <Card.Text >Price - {data.price}</Card.Text>
          <Card.Text >Room number - {username}</Card.Text>
          
          <FloatingLabel controlId="floatingInput" label="Quantity" className="mb-2">
              <Form.Control name="quantity" onChange={handleChange} value={FormData.quantity} placeholder="Enter the qunatity" />
          </FloatingLabel>
          
          <div style={{display:"flex",justifyContent:"left",flexDirection:'row'}}><button style={{backgroundColor:"black",color:'white',border:'none',borderRadius:'3px',padding:'4px'}} type="submit">order</button></div>
          </Form>
          
       
        </Card.Body>
      </Card>
        {/* <form onSubmit={handleSubmit}>
          <div>{data.nameofitem}</div>
          <div>{data.price}</div> 
          <div>{username}</div>
          <input type="text" name="quantity" onChange={handleChange} value={FormData.quantity} placeholder="Enter the qunatity"></input>   
          <button type="submit">order</button>
        </form> */}
    </Container>
  )
}
