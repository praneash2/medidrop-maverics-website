import * as api from '../api/index.js';

export const get_dashboard=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetch_dashboard();
        
        dispatch({type:"GET_ABOUT",payload:data});
    }
    catch(error){
        console.log(error);
    }
}
export const post_dashboard=(form_data)=>async(dispatch)=>{
    try{
        
        const {data}=await api.post_dashboard(form_data);
        
        dispatch({type:"POST_ABOUT",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const update_dashboard=(id,form_data)=>async(dispatch)=>{
    try{
        // console.log(id,form_data);
        const {data}=await api.update_dashboard(id,form_data);
        console.log(data);
        dispatch({type:"UPDATE_ABOUT",payload:data});
    }
    catch(error){
        console.log(error);
    }
}

export const delete_dashboard=(id)=>async(dispatch)=>{
    try{
        
        const data_id=await api.delete_dashboard(id);
        
        dispatch({type:"DELETE_ABOUT",payload:data_id.data});
    }
    catch(error){
        console.log(error);
    }
}