import canvasmodel from "../models/canvasmodel.js";
// Controller/Controllproduct.js

import multer from 'multer';

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Set your desired destination folder
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name; you can change it as needed
  },
});

const upload = multer({ storage: storage }).single('image'); // Define upload middleware here

// Your other controller functions...

export const createproduct = async (req, res) => {
    try {
      upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          return res.status(500).json(err);
        } else if (err) {
          // An unknown error occurred when uploading.
          return res.status(500).json(err);
        }
  
        // File upload succeeded, continue creating the product
        const prodname = req.body.title;
        const prodprice = req.body.price;
  
        // The file will be available as req.file
        const prodimg = req.file.filename; // Assuming 'image' is the name of the field in your form for the image
        const imagePath = `http://localhost:5000/Uploads/${prodimg}`; // Update with your server URL and image upload path
  
        console.log("POST API REACHED");
  
        const newproduct = new canvasmodel({
          title: prodname,
          price: prodprice,
          img: imagePath, // Save the complete image path
        });
  
        await newproduct.save();
        console.log("SAVED");
        res.send("Product added successfully");
      });
    } catch (error) {
      console.log("NOT SAVED", error);
      res.status(500).send(error.message);
    }
  };
  


export const getproduct= async(req,res)=>{
try {
    const products= await canvasmodel.find();
    res.json(products);
    console.log("GET API REACHED");
} catch (error) {
    console.log("DID NOT FIND ANY DATA");
}



}
// export const createproduct= async(req , res)=>{
   
//     const prodname=req.body.title;
    
//     const prodprice=req.body.price;
  
//     const prodimg=req.body.img;
  
//     console.log("POST API REACHED");
    


//     const newproduct=new canvasmodel({
//         title:prodname,
//         price: prodprice,
//         img : prodimg,
//     });
//     try {
//         await newproduct.save();
//         console.log("SAVED");
        
//     } catch (error) {
//         console.log("NOT SAVED");
//     }
// }
// export const deleteprod = async (req, res) => {
//     const productId = req.params.id;
//     try {
//         const deletedProduct = await canvasmodel.findByIdAndDelete(productId);
//         if (!deletedProduct) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         console.log("DELETE RETURNED");
        
//     } catch (error) {
//         console.log("Error deleting product:", error.message);
        
//     }
// };
import fs from 'fs';

export const deleteprod = async (req, res) => {
    const productId = req.params.id;
    try {
        const deletedProduct = await canvasmodel.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const imageFilePath = `./uploads/${deletedProduct.img}`;
        // Check if the file exists before attempting deletion
        if (fs.existsSync(imageFilePath)) {
            fs.unlinkSync(imageFilePath);
            console.log('Image file deleted successfully');
        } else {
            console.log('Image file not found');
        }
        
        console.log("DELETE RETURNED");
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.log("Error deleting product:", error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};


export const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { title, price, img } = req.body; 
    try {
      const updatedProduct = await canvasmodel.findByIdAndUpdate(
        productId,
        { title, price, img },
        { new: true } 
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.log("Error updating product:", error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  