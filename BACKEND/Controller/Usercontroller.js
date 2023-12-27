import Usermodel from "../models/Usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export  const createuser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  bcrypt.hash(password,10).then((hash)=>{
    const newuser = new Usermodel({
      name: name,
      email: email,
      password: hash
    });
    try {
      newuser.save();
      console.log("SAVED");
    } catch (error) {
      console.log("NOT SAVED");
    }
  });
}
export const loginuser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log("Login API REACHED");
  try {
    const user = await Usermodel.findOne({ email: email });
    bcrypt.compare(password,user.password).then((result)=>{
      if(result){
        res.json("Successful");
      }else{
        res.json("Wrong");
      }
    });
    
  } catch (error) {
    console.log("NOT SAVED");
  }
}