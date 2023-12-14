import mongoose from "mongoose";
const workstructure= new mongoose.Schema({
title: String,
img : String,});
export const workmodel = mongoose.model("workmodel",workstructure);