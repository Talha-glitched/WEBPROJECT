import React, { useState } from 'react';
import adminlogo from "../img/adminlogo.png";
import AdminSideBar from './AdminSideBar';
import { addproduct } from '../Services/api';
import "./addproduct.css";

export default function Addproduct() {
  const [formdata, setformdata] = useState({
    title: '',
    price: '',
    img: null,
  });

  const handlechange = (e) => {
    if (e.target.name === 'img') {
      setformdata({ ...formdata, img: e.target.files[0] });
    } else {
      setformdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const handlesend = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', formdata.title);
    formData.append('price', formdata.price);
    formData.append('image', formdata.img);

    try {
      await addproduct(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const imagePreview = formdata.img ? URL.createObjectURL(formdata.img) : null;

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
        <div className="col col-md-6 saide" >
          <div className='container saide' style={{ color: "black" }}>
            <form className="row g-3 saide" encType="multipart/form-data">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => handlechange(e)} name="title" id="inputEmail4" style={{ width: "200px" }} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Price</label>
                <input type="text" className="form-control" onChange={(e) => handlechange(e)} name="price" id="inputPassword4" style={{ width: "200px" }} />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputZip" className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => handlechange(e)}
                  name="img"
                  id="inputZip"
                  style={{ width: "200px" }}
                />
              </div>
              <div className="col-md-6">
                {imagePreview &&
                  <div className="card" style={{ width: "18rem", marginTop: "10px" }}>
                    <img src={imagePreview} className="card-img-top" alt="Preview" />
                    <div className="card-body">
                      <h5 className="card-title">{formdata.title}</h5>
                      <p className="card-text">Rs. {formdata.price}</p>
                    </div>
                  </div>
                }
              </div>
              <div className="col-12">
                <button type="submit" onClick={(e) => handlesend(e)} className="btn btn-primary container button batton">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col col-md-3 saide">
          {/* Additional content */}
        </div>
      </div>
    </div>
  );
}
