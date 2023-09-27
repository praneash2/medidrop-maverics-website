import React,{useState} from 'react';
import { signup } from '../../actions/user.js';
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container,Card,Row,Col,Form,FloatingLabel,Button,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Login() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    let [data,setData]=useState({username:"",password:""});
    
    const handleChange=(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        dispatch(signup({UserName:data.username,Password:data.password}));
        setData({username:"",password:""});
        navigate('/');
    }
  return (
    <Container  fluid style={{height:'100vh',width:'100vw',display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center"}}>
        <div style={{border:"3px solid black",borderRadius:'10px',padding:'30px'}}>

        
        <Form style={{display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center"}} onSubmit={handleSubmit}>
            <div style={{padding:"10px 10px 10px 10px"}}>Login</div>
            <FloatingLabel controlId="floatingInput" label="enter username" className="mb-3">
              <Form.Control  name="username" onChange={handleChange} value={data.username} placeholder="enter username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="enter password" className="mb-3">
              <Form.Control name="password" onChange={handleChange} value={data.password}  placeholder="enter password" />
            </FloatingLabel>
            {/* <input value={data.username} type="text" name="username" onChange={handleChange} placeholder="enter username"></input>
            <input value={data.password} name="password" onChange={handleChange} type="password" placeholder="enter password"></input> */}
            <button style={{borderRadius:'10px',backgroundColor:'black',color:'white'}} type="submit">Signup</button>
            
            </Form>
        </div>
    </Container>
    
  )
}
