const Orders=require('../model/orders.js');
const mongoose = require('mongoose');

 const get_orders=async(req,res)=>{
    try {
        if(req.params.roomno==="admin"){
            const data=await Orders.find();
            res.status(200).json(data);
        }
        else{
        const data=await Orders.find({roomno:req.params.roomno});
        res.status(200).json(data);
        }
        
    } catch (error) {
        res.send(error.message);
    }
}


 const post_orders=async(req,res)=>{
    try{
        let data=req.body;
        let newDashboard=await Orders.create(data);
        await newDashboard.save();
        
        res.status(201).json([newDashboard]);

    }
    catch(error){
        res.status(404).send(error.message);
    }
}

 const put_orders=async(req,res)=>{
    try{
        let newData=req.body;
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        if(isValid===true){
            const updatedlist=await Orders.findByIdAndUpdate(_id, newData, {new: true});
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

 const delete_orders=async(req,res)=>{
    try{
        let _id=req.params.id;
        const isValid = mongoose.Types.ObjectId.isValid(_id);
        
        if(isValid===true){
            await Orders.findByIdAndDelete(_id);
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
    get_orders,
    post_orders,
    put_orders,
    delete_orders,
};