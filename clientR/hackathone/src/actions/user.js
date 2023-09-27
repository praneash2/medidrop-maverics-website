import  * as api from '../api/index.js';

export const login=(username,password)=>async(dispatch)=>{
    try{
        
        const {data}=await api.login_api(username,password);
        
        dispatch({type:"LOGIN",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const signup=(e)=>async(dispatch)=>{
    try{
        
        const {data}=await api.signup_api(e);
        
        dispatch({type:"SIGNUP",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const logout=()=>async(dispatch)=>{
    try{
        
        alert("logged out");
        dispatch({type:"LOGOUT",payload:null});
    }
    catch(error){
        console.log(error);
    }
}