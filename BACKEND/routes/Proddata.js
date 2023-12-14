import  express  from "express";
import { createproduct, getproduct, deleteprod,updateProduct } from "../Controller/Controllproduct.js";
const router=express.Router();

router.get("/",getproduct);

router.post("/",createproduct);
 router.delete('/:id', deleteprod);
 router.put('/:id', updateProduct);
export default router;