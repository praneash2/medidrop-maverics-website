import * as api from '../api/index.js';

export const get_orders=(username)=>async(dispatch)=>{
    try{
        const {data}=await api.fetch_orders(username);
        
        dispatch({type:"GET_ORDERS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const post_orders=(form_data)=>async(dispatch)=>{
    try{
        
        const {data}=await api.post_orders(form_data);
        
        dispatch({type:"POST_ORDERS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const update_orders=(id,form_data)=>async(dispatch)=>{
    try{
        // console.log(id,form_data);
        const {data}=await api.update_orders(id,form_data);
        console.log(data);
        dispatch({type:"UPDATE_ORDERS",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const delete_orders=(id)=>async(dispatch)=>{
    try{
        
        const data_id=await api.delete_orders(id);
        
        dispatch({type:"DELETE_ORDERS",payload:data_id.data});
    }
    catch(error){
        console.log(error);
    }
}