import  express  from "express";
import { createproduct, getproduct, deleteprod,updateProduct } from "../Controller/Controllproduct.js";
import auth from "../Middleware/authMiddleware.js";
const router=express.Router();

router.get("/",getproduct);

router.post("/",auth, createproduct);
 router.delete('/:id',auth, deleteprod);
 router.put('/:id',auth, updateProduct);
export default router;