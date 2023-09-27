const mongoose = require('mongoose');
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  doctorname:String,
  docotordegree:String,
  appointmentTime:String,
  videocallLink:String,
  roomno:String,
});

const Appointment=mongoose.model('Appointment', appointmentSchema);
module.exports=Appointment;