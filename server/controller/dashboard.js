

const Dashboard=require('../model/dashboard.js');
const mongoose = require('mongoose');
 const get_dashboard=async(req,res)=>{
    try {
        const data=await Dashboard.find();
        res.status(200).json(data);
    } catch (error) {
        res.send(error.message);
    }
}


 const post_dashboard=async(req,res)=>{
    try{
        let data=req.body;
        let newDashboard=await Dashboard.create(data);
        await newDashboard.save();
        
        res.status(201).json([newDashboard]);

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

const put_dashboard=async(req,res)=>{
    try{
        let newData=req.body;
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        if(isValid===true){
            const updatedlist=await Dashboard.findByIdAndUpdate(_id, newData, {new: true});
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

const delete_dashboard=async(req,res)=>{
    try{
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        
        if(isValid===true){
            await Dashboard.findByIdAndDelete(_id);
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

module.exports = {
    get_dashboard,
    post_dashboard,
    put_dashboard,
    delete_dashboard
  };