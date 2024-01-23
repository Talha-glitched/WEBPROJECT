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

  try {
    const user = await Usermodel.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed: User not found' });
    } 

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
   
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: 'Authentication failed: Wrong password' });
    }
    
    const token = jwt.sign({ email: email }, "secret", { expiresIn: "1h" });
    
    // Set the cookie before sending the response
    // res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    // Send the response after setting the cookie
    res.status(200).json({ message: 'Successful', token: token });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

 export const logoutuser = async (req, res) => {
   res.cookie("jwt", "", { maxAge: 1 });
   res.redirect("/");
 };