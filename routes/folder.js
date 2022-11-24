const express = require('express');
const { createRootFolder, createChildFolder, deleteFolder, findAllFolder } = require('../controllers/folder');

const router=express.Router();
 
router.post('/root',createRootFolder);

router.post('/child',createChildFolder);

router.post('/delete',deleteFolder)

router.get('/all',findAllFolder)


module.exports=router;