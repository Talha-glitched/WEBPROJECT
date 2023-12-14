import mongoose from "mongoose";
const canvasstructure= new mongoose.Schema({
title: String,
img : String,
price : String,

});

const canvasmodel = mongoose.model("canvasmodel",canvasstructure);
export default canvasmodel;