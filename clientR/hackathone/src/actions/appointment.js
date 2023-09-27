import * as api from '../api/index.js';

export const get_appointment=(username)=>async(dispatch)=>{
    try{
        const {data}=await api.get_appointment(username);
        
        dispatch({type:"GET_APPOINTMENT",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const post_appointment=(form_data)=>async(dispatch)=>{
    try{
        
        const {data}=await api.post_appointment(form_data);
        
        dispatch({type:"POST_APPOINTMENT",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const update_appointment=(id,form_data)=>async(dispatch)=>{
    try{
        // console.log(id,form_data);
        const {data}=await api.update_appointment(id,form_data);
        console.log(data);
        dispatch({type:"UPDATE_APPOINTMENT",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const delete_appointment=(id)=>async(dispatch)=>{
    try{
        
        const data_id=await api.delete_appointment(id);
        
        dispatch({type:"DELETE_APPOINTMENT",payload:data_id.data});
    }
    catch(error){
        console.log(error);
    }
}