const express=require('express');
const cors=require('cors');

const dashboard=require( './routes/dashboard.js');
const orders= require('./routes/orders.js');
const appointment= require('./routes/appointment.js');
const user=require('./routes/user.js');
const mongoose = require('mongoose');

let app=express();
app.use(express.json());
app.use(cors());



let PORT=5000;

let URL='mongodb://127.0.0.1:27017/mcea';

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(app.listen(PORT,()=>{
    console.log(`connected to mongo and server started listening on ${PORT}`);})
).catch(()=>{
    console.log("cant connect to mongo");
});

app.use('/',dashboard);
app.use('/orders',orders);
app.use('/appointment',appointment);
app.use('/auth',user);