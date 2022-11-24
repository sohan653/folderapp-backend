const { response } = require("express");
const Folder = require("../models/folder");



exports.createRootFolder= async(req,res)=>{
   try {
    const reqData=req.body;
    
    const folder={
       folderName:reqData.folderName,
        type:"root"
    }

    const data= await Folder.create(folder)
    res.status(201).json({
        message:"sucess",
        data
    })
   } catch (error) {
     console.log(error.message)
   }

}


exports.createChildFolder=async(req,res)=>{
   try {
    const {folderName,parentsId}=req.body;
    const folder={
        folderName,
        type:"child",
        parentsId
    }
    const data= await Folder.create(folder);

    res.status(201).json({
        message:"sucess",
        data
    })
   } catch (error) {
    
   }
}


exports.deleteFolder=async(req,res)=>{
   try {
    const reqbody=req.body;
    const id=reqbody._id
    await Folder.findByIdAndRemove(id);
    res.status(200).json({
        message:"successfully deleted folder"
    })
   } catch (error) {
    res.json(error.message)
   }
}

exports.findAllFolder=async(req,res)=>{
    try {
        const data= await Folder.find({})
        res.status(200).json({
            data
        })
    } catch (error) {
        res.json(error.message)
    }
}