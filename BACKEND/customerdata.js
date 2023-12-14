import mongoose from "mongoose";
const customerstructure= new mongoose.Schema({

name: String,
email : String,
Details : String,
});
export const customermodel = mongoose.model("customermodel",customerstructure);