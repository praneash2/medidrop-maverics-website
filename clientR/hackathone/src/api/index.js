import axios from 'axios';

const URL='https://sih.praneashk.repl.co/';
const API=axios.create({baseURL:URL})



//about
export const fetch_dashboard=()=>API.get(`${URL}`);
export const post_dashboard=(data)=>API.post(`${URL}`,data);
export const update_dashboard=(id,data)=>API.put(`${URL}/${id}`,data);
export const delete_dashboard=(id)=>API.delete(`${URL}/${id}`);

//orders
export const fetch_orders=(username)=>API.get(`${URL}orders/${username}`);
export const post_orders=(data)=>API.post(`${URL}orders`,data);
export const update_orders=(id,data)=>API.put(`${URL}orders/${id}`,data);
export const delete_orders=(id)=>API.delete(`${URL}orders/${id}`);

//appointment
export const get_appointment=(username)=>API.get(`${URL}appointment/${username}`);
export const post_appointment=(data)=>API.post(`${URL}appointment`,data);
export const update_appointment=(id,data)=>API.put(`${URL}appointment/${id}`,data);
export const delete_appointment=(id)=>API.delete(`${URL}appointment/${id}`);

export const login_api=(username,password)=>API.get(`${URL}auth/${username}/${password}`);
export const signup_api=(data)=>API.post(`${URL}auth`,data);