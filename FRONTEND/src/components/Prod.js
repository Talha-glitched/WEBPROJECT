import React, { useState, useEffect } from "react";
import { getproduct, deleteproduct, updateProduct } from "../Services/api";
import './products.css';

export default function Prod() {
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
    <div className="container">
      <div className="row row4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.map((item) => (
            <div className="col col-md-3" style={{ padding: "15px" }} key={item.id}>
              <div className="card">
                <img src={item.img} className="card-img-top cardimg" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{ textAlign: "center" }}>{item.title}</h5>
                  <p className="card-text" style={{ textAlign: "center" }}>Rs. {item.price}</p>
                  <div className="container">
                    <button className="btn btn-outline-dark" >Add to Cart</button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
