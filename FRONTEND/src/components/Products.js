import './products.css';
// import productData from './data';
import pr3 from '../img/Products/pr3.jpg';
import Pr1 from '../img/Products/Pr1.jpg';
import pr2 from '../img/Products/pr2.jpg';
import pr4 from '../img/Products/pr4.jpg';
import pr5 from '../img/Products/pr5.jpg';
import pr6 from '../img/Products/pr6.jpg';
import pr7 from '../img/Products/pr7.jpg';
import pr8 from '../img/Products/pr8.jpg';
import pr9 from '../img/Products/pr9.jpg';
import pr10 from '../img/Products/pr10.jpg';
import pr11 from '../img/Products/pr11.jpg';
import pr12 from '../img/Products/pr12.jpg';
const { useState, createContext } = require("react");

export const NumberContext = createContext();

function Products() {
  const productData = [
    {
      title: "Prada Panther",

      image: pr3,
      Price: "Rs. 5000",
    },
    {
      title: "Gangster's Paradise",

      image: pr2,
      Price: "Rs. 8000",
    },
    {
      title: "The DUO",

      image: Pr1,
      Price: "Rs. 3000",
    },
    {
      title: "Scarface",

      image: pr4,
      Price: "Rs. 5000",
    },
    {
      title: "Scarface Supreme",

      image: pr5,
      Price: "Rs. 4500",
    },
    {
      title: "The GodFather",

      image: pr6,
      Price: "Rs. 6500",
    },
    {
      title: "Phases of the moon ",

      image: pr7,
      Price: "Rs. 6500",
    },
    {
      title: "The Real Tiger",

      image: pr8,
      Price: "Rs. 6500",
    },
    {
      title: "GodFather",

      image: pr9,
      Price: "Rs. 6500",
    },
    {
      title: "The GodFather",

      image: pr10,
      Price: "Rs. 6500",
    },
    {
      title: "Pulp Fiction",

      image: pr11,
      Price: "Rs. 6500",
    },
    {
      title: "Panther Buisness",
      image: pr12,
      Price: "Rs. 6500",
    },
  ];


  return (
    <>
      <div className="container">
        <div className="row row4">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {productData.map((Canvasdata) => (
              <div class="col col-md-3 " style={{padding:"15px"}}>
                <div class="card">
                  <img src={Canvasdata.image} class="card-img-top cardimg" alt={Canvasdata.title} />
                  <div class="card-body">
                    <h5 class="card-title">{Canvasdata.title}</h5>
                    <p class="card-text" style={{ textAlign: "center" }}>{Canvasdata.Price}</p>
                    <div className='container'> <button className="btn btn-outline-dark">Add to Cart</button></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default Products;
