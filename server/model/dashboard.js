const mongoose = require('mongoose');
const { Schema } = mongoose;

const dashboardSchema = new Schema({
  nameofitem:String,
  image:String,
  price:String,
  roomno:String,
  quantity:String,
});

const Dashboard=mongoose.model('Dashboard', dashboardSchema);
module.exports=Dashboard;