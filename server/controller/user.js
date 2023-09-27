const User=require( '../model/user.js');
const mongoose =require( 'mongoose');
const  bcrypt =require( 'bcrypt');
const jwt =require('jsonwebtoken');
const privateKey="mcea_website"
 const login=async(req,res)=>{
    try{
        const data=req.params;
        
        const already_user_exits=await User.findOne({UserName:data.UserName});
        if(already_user_exits){
            
            const password=await bcrypt.compare(data.Password,already_user_exits.Password);
            
            if(password===true){
                
                const token=jwt.sign({UserName:data.UserName},privateKey,{ expiresIn: '10d' });
                
                res.status(200).json({message:data.UserName,data:{token}});
            }
            else{
                res.status(200).json({message:"nope"});
            }
            
        }
        else{
            res.status(404).json({message:"nope"});
        }
        
    }
    catch(error){
        console.log(error.message);
    }
}

 const signUp=async(req,res)=>{
    try{
        const data=req.body;
        const username=data.UserName;
        const password=await bcrypt.hash(data.Password,12);//12 is the strength of the salt
        const already_user_exits=await User.findOne({UserName:username});
        
        if(already_user_exits){
            res.status(200).json({message:"nope",data:"user already exists"});
        }
        else{
            let user=await User.create({UserName:username,Password:password});
            await user.save();
            
            const token=jwt.sign({UserName:username},privateKey,{ expiresIn: '10d' });
            res.status(200).json({message:data.UserName,data:{token}});
        }
        

    }
    catch(error){
        console.log(error.message);
    }
}

 const changePassword=async(req,res)=>{
    try{
        const data=req.body;
        const username=data.UserName;
        const already_user_exits=await User.findOne({UserName:username});
        console.log(already_user_exits);
        if(already_user_exits){
            const password=await bcrypt.hash(data.Password,12);//12 is the strength of the salt
            let user=await User.updateOne({UserName:username},{Password:password});
        
            res.status(200).json({data:"password changed"});
        }
        else{
            res.status(401).json({message:"user not exits"});
        }
        
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports={
    login,
    signUp,
    changePassword,
}