import Orders from "./Orders";
import "./adminDashboard.css";
import React, { useState, useEffect } from 'react';
import { data } from './data';
function AdminDashboard() {
  const [products, setProducts] = useState(data);

  const handleUpdateProduct = (updatedProducts) => {
    setProducts(updatedProducts);
  };
  return (
    <>
      <div className="dashboard">
        <h2>Top Orders</h2>
     <Orders products={products} onUpdateProduct={handleUpdateProduct} />
      </div>
    </>
  );
}

export default AdminDashboard;
