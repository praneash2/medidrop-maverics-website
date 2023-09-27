const Appointment =require( '../model/appointment.js');
const mongoose = require('mongoose');

 const get_appointment=async(req,res)=>{
    try {
        if(req.params.roomno==="admin"){
            const data=await Appointment.find();
            res.status(200).json(data);
        }
        else{
            const data=await Appointment.find({roomno:req.params.roomno});
            res.status(200).json(data);
        }
        
        
    } catch (error) {
        res.send(error.message);
    }
}


 const post_appointment=async(req,res)=>{
    try{
        let data=req.body;
        let newDashboard=await Appointment.create(data);
        await newDashboard.save();
        
        res.status(201).json([newDashboard]);

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const put_appointment=async(req,res)=>{
    try{
        let newData=req.body;
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        if(isValid===true){
            const updatedlist=await Appointment.findByIdAndUpdate(_id, newData, {new: true});
            await updatedlist.save();
            res.status(200).json([updatedlist]);
        }
        else{
            res.status(404).json({message:"sorry select valid event to update"});
        }
         
        
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const delete_appointment=async(req,res)=>{
    try{
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        
        if(isValid===true){
            await Appointment.findByIdAndDelete(_id);
            res.status(200).json(_id);
        }
        else{
            res.status(404).json({message:"sorry select valid event to delete"});
        }
        
    }
    catch(error){
        res.status(404).send(error.message);
    }
}

module.exports={
    get_appointment,
    post_appointment,
    put_appointment,
    delete_appointment,
}