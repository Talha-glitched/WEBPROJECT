
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import QuoteRoute from "./routes/QuoteRoute.js";
import Proddata from "./routes/Proddata.js"
import { createproduct, getproduct } from "./Controller/Controllproduct.js";
import canvasmodel from "./models/canvasmodel.js";
//BACKEND CODE
const app = express();


const url ="mongodb+srv://rana_talha16:the.edgyguy23@cluster0.rykde1s.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log("Connected to db"));
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG or PNG are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

app.listen(5000);

app.use(cors({origin:"http://localhost:3000"}));
app.use(bodyParser.json( { extended: true } ));
app.use(bodyParser.urlencoded ({ extended: true}));

app.use("/", Proddata );
app.use("/viewproducts",Proddata);
app.delete("/:id",Proddata);
app.use("/reviews",QuoteRoute);
app.use('/Uploads', express.static('uploads'));






















