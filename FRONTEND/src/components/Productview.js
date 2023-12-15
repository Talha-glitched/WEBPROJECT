import React, { useState, useEffect } from "react";
import { getproduct, deleteproduct, updateProduct } from "../Services/api";
import './productview.css';
import adminlogo from "../img/adminlogo.png"

import AdminSideBar from './AdminSideBar';

export default function ProductView() {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const productDetail = await getproduct();
      setData(productDetail);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDeleteItem = async (productId) => {
    try {
      await deleteproduct(productId);
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setUpdatedData({
      title: item.title,
      price: item.price,
      img: item.img,
    });
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
    setUpdatedData({});
  };

  const handleUpdateItem = async () => {
    try {
      await updateProduct(editingItem._id, updatedData);
      fetchData();
      handleCancelEdit();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div className="row row11">
      <div className="col col-md-3">
        <div className="row row10">
          <img className="admin-img" src={adminlogo} alt="" />
          <h5>Admin Dashboard</h5>
        </div>
        <AdminSideBar />
      </div>
      <div className="col col-md-9" style={{ height: "100vh", overflowY: "auto" }}>
        <div className="container">
          <div className="row row4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {data.map((item) => (
                <div className="col col-md-3" style={{  }} key={item.id}>
                  <div className="card card_sizing container">
                    <img src={item.img} className="card-img-top cardimg" alt={item.title} style={{ height: "100px", width: "100px" }} />
                    <div className="card-body">
                      <h5 className="card-title" style={{ textAlign: "center" }}>{item.title}</h5>
                      <p className="card-text" style={{ textAlign: "center" }}>Rs. {item.price}</p>
                      <div className="container">
                        <button className="btn btn-outline-dark hovprop " style={{backgroundColor:"#fa697b", color:"white"}} onClick={() => handleDeleteItem(item._id)}>Delete</button>
                        <button className="btn btn-outline-dark hovprop"  style={{backgroundColor:"#fa697b", color:"white"}} onClick={() => handleEdit(item)}>Edit</button>
                        {editingItem && editingItem._id === item._id && (
                          <div className="update-form card_sizing">
                            <input
                              type="text"
                              value={updatedData.title || ''}
                              onChange={(e) => setUpdatedData({ ...updatedData, title: e.target.value })}
                            />
                            <input
                              type="text"
                              value={updatedData.price || ''}
                              onChange={(e) => setUpdatedData({ ...updatedData, price: e.target.value })}
                            />
                            {/* Add fields for other data */}
                            <button onClick={handleUpdateItem}>Update</button>
                            <button onClick={handleCancelEdit}>Cancel</button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
