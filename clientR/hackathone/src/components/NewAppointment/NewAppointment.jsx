import React,{useState} from 'react';
import { post_appointment } from '../../actions/appointment.js';
import {useDispatch} from 'react-redux';
//bootstraps
import { Container,Card,Row,Col,Form,FloatingLabel,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function () {
    const dispatch=useDispatch();
    let [FormData,setData]=useState({
        doctorname:"",
        docotordegree:"",
        appointmentTime:"",
        videocallLink:"",
        roomno:"",
      });
    
    const handleChange=(e)=>{
        
        setData({...FormData,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        dispatch(post_appointment(FormData));
        setData({
            doctorname:"",
            docotordegree:"",
            appointmentTime:"",
            videocallLink:"",
            roomno:"",
          });
    }
  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput" label="Doctor Name" className="mb-3">
              <Form.Control name="doctorname" onChange={handleChange} value={FormData.doctorname} placeholder="Enter Doctor Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="doctor's degree" className="mb-3">
              <Form.Control name="docotordegree" onChange={handleChange} value={FormData.docotordegree} placeholder="Enter Doctor's Degree" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Appointment Time" className="mb-3">
              <Form.Control name="appointmentTime" onChange={handleChange} value={FormData.appointmentTime} placeholder="Enter Appointment Time"/>
            </FloatingLabel>

             <FloatingLabel controlId="floatingInput" label="Paste Video call Link here" className="mb-3">
             <Form.Control name="videocallLink" onChange={handleChange} value={FormData.videocallLink} placeholder="Paste Video call Link here" />
             </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Room No" className="mb-3">
              <Form.Control name="roomno" onChange={handleChange} value={FormData.roomno} placeholder="Enter Room No" />
            </FloatingLabel>
            
            <button type="submit">submit</button>
        </Form> 
    </Container>
  )
}
