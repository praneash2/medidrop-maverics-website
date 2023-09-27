import React from 'react'
//bootstraps
import { Container,Card,Button,Form,FloatingLabel} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function Card_dash({data}) {
  return (
    
    <Container>
      <Card style={{height:'auto',width:'20rem'}}>
          <Card.Img style={{height:"10rem",width:"100%"}} src="https://images.ctfassets.net/lzny33ho1g45/1V3XE89tOdr6aRGp3WxywW/b2aa4e5f754c4984e5c125e75e3aa7e3/app-tips-gooogle-meet.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760" alt="oops someting went wrong"/>
        <Card.Body>
          
          <Card.Title >{data.doctorname +" "+data.docotordegree}</Card.Title>
          <Card.Text >{data.appointmentTime}</Card.Text>
          
          <a href={data.videocallLink} target="_blank">click here to join</a>
          <Card.Text >{data.roomNumber}</Card.Text >
        </Card.Body>
      </Card>
        
 
    </Container>
  )
}
