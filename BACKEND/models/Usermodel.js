import mongoose from "mongoose";
const Userstructure= new mongoose.Schema({
name: String,
email : String,
password : String,

});

const Usermodel = mongoose.model("Usermodel",Userstructure);
export default Usermodel;