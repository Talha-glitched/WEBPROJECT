
import express from 'express';
import {createuser, loginuser} from '../Controller/Usercontroller.js';
const router=express.Router();

router.post("/",createuser);
router.post("/login",loginuser);


export default router;