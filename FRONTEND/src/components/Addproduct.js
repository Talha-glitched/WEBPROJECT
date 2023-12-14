import React, { useState } from 'react'
import adminlogo from "../img/adminlogo.png"

import AdminSideBar from './AdminSideBar';
import { addproduct } from '../Services/api';

export default function Addproduct() {
    const[formdata, setformdata]= useState(
    {
        title:'',  
        price:'',
        img:  '',
    }
 );
 const handlechange = (e) => {
  if (e.target.name === 'img') {
    setformdata({ ...formdata, img: e.target.files[0] }); // Capture the file object
  } else {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }
};

const handlesend = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('title', formdata.title);
  formData.append('price', formdata.price);
  formData.append('image', formdata.img); // Append the file object to the FormData
console.log(formData.getAll('img'));
  try {
    await addproduct(formData);
  } catch (error) {
    console.error('Error:', error);
  }
};



// const {title, price, img,}=formdata;


 
    return (

      <div className="container-fluid">
       
        <div className="row row11">
          <div className="col col-md-3">
            <div className="row row10">
              <img className="admin-img" src={adminlogo} alt="" />
              <h5>Admin Dashboard</h5>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
     
          <div>
      <form class="row g-3" encType="multipart/form-data" >
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Name</label>
    <input type="text" class="form-control" onChange={(e)=> handlechange(e)}  name="title" id="inputEmail4"style={{width:"200px"}}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Price</label>
    <input type="text" class="form-control" onChange={(e)=> handlechange(e)} name="price" id="inputPassword4" style={{width:"200px"}}/>
  </div>
 
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Image</label>
    <input type="file" class="form-control" onChange={(e)=> handlechange(e)} name="img"  id="inputZip" style={{width:"200px"}}  />
  </div>
  <div class="col-12">
    <button type="submit" onClick={(e)=>handlesend(e)} class="btn btn-primary">Submit</button>
  </div>
</form>
    </div>
          </div>
        </div>
        <div className="row row12">
      
        </div>
      </div>
   


    
  )
}
