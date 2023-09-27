const mongoose = require('mongoose');
const { Schema } = mongoose;

const ordersSchema = new Schema({
  nameofitem:String,
  image:String,
  price:String,
  roomno:String,
  quantity:String,
  status:String,
});

const Orders=mongoose.model('Orders', ordersSchema);
module.exports=Orders;