const mongoose = require('mongoose');

const dataSchema= new mongoose.Schema({
    folderName:{
        type:String,
        required:true
    },
    type:String,
    parentsId:String
},{versionKey:false});

const Folder=mongoose.model('Folder',dataSchema);

module.exports =Folder;
