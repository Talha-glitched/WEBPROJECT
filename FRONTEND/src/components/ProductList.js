import React, { useState } from 'react';
import { data } from './data';
import './productlist.css';
import Cart from './Cart';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const filteredProducts = selectedCategory
    ? data.filter(product => product.category === selectedCategory)
    : data;

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  

  return (
    <div>
      <div className='container'>
        <button className='filterbtn' onClick={() => handleCategoryChange('Mafia')}>Mafia</button>
        <button className='filterbtn' onClick={() => handleCategoryChange('Anime')}>Anime</button>
        <button className='filterbtn' onClick={() => handleCategoryChange('Cars')}>Cars</button>
        <button className='filterbtn' onClick={() => handleCategoryChange('')}>Show All</button>
      </div>
      <h2 className='container' style={{ color: "black" }}>
        {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
      </h2>
      <div className='container'>
        <div className="row row4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {filteredProducts.map((product) => (
              <div className="col col-md-3 prod" key={product.id}>
                <div className="card cardsize" style={{ margin: "15px", height: "550px", width: "300px" }}>
                  <img src={product.image} className="card-img-top cardimg" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text" style={{ textAlign: "center" }}>Rs. {product.Price}</p>
                    <div className='container'>
                      <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ProductList;
