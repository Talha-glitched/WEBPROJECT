import Orders from "./Orders";
import "./adminDashboard.css";
import React, { useState, useEffect } from 'react';
import { data } from './data';
import sideex from "../img/sideex.jpeg"
function AdminDashboard() {
  const [products, setProducts] = useState(data);

  const handleUpdateProduct = (updatedProducts) => {
    setProducts(updatedProducts);
  };
  return (
    <>
      <div className="dashboard">
        <h2 className="container">Top Orders</h2>
        <img src={sideex} style={{width:"100%"}} />
      </div>
    </>
  );
}

export default AdminDashboard;
