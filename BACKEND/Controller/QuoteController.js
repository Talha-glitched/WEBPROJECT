import Reviewmodel from "../models/Reviewmodel.js";

export const createquote= async(req , res)=>{
   
    const cusname=req.body.name;
    const cusemail=req.body.email;
    const cuscontact=req.body.contact;
    const cusrequirement=req.body.requirement;  
  
    console.log("POST API REACHED");
    


    const newcus=new Reviewmodel({
        name:cusname,
        contact : cuscontact,
        email: cusemail,
        requirement : cusrequirement,
    });
    try {
        await newcus.save();
        console.log("SAVED");
        
    } catch (error) {
        console.log("NOT SAVED");
    }
}