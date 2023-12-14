import logo from '../img/logo.png'; 
import Velocity from '../img/Velocity.jpg';
import cube from '../img/cube.png';
import GPLOGO from '../img/GPLOGO.jpg';
import Fakhr from '../img/Fakhr.png';
import Prism from '../img/Prism.png';
import pizza from '../img/Logos/800-pizza.png';
import React from "react";
import "./clientsLogoGrid.css";
const ClientsLogoGrid = () => {
//   const clientsLogos = [
//     "https://i.ibb.co/qR57r62/800PIZZA.png",
//     "https://i.ibb.co/028b577/ATCON.png",
//     "https://i.ibb.co/4J7h4Yx/Cretors.png",
//     "https://i.ibb.co/K715Z31/Fakhruddin.png",
//     "https://i.ibb.co/j7s2w7x/GOVER-CONTRACTING.png",
//     "https://i.ibb.co/J66v43B/GP.png",
//     "https://i.ibb.co/j04c0t8/GLANDMARK-GROUP.png",
//     "https://i.ibb.co/zQ7441M/PRISM",
//     "https://i.ibb.co/5Y1p9Z7/RECAGON.png",
//     "https://i.ibb.co/qP0p48L/REGAL.png",
//     "https://i.ibb.co/0Zv578L/Schindler.png",
//     "https://i.ibb.co/H8t82wX/THE-FAJRIC-GALLERY.png",
//     "https://i.ibb.co/738v575/Velocity-W.png",
//     "https://i.ibb.co/261W215/Winter-Plus.png",
//     "https://i.ibb.co/j7s2w7x/uniestate.png",
//     "https://i.ibb.co/F3VqQ8b/كليات",
//   ];

  return (
    <div>
      <h2>Our Clients</h2>
      <div className="clients-logo-grid">
        <img src={logo} alt="Client logo 0" />
        <img src={Velocity} alt="Client logo 1" />
        <img src={cube} alt="Client logo 2" />
        <img src={GPLOGO} alt="Client logo 3" />
        <img src={Fakhr} alt="Client logo 4" />
        <img src={Prism} alt="Client logo 5" />
       
        {/* <img src={} alt="Client logo 7" />
        <img src={} alt="Client logo 8" />
        <img src={} alt="Client logo 9" />
        <img src={} alt="Client logo 10" />
        <img src={} alt="Client logo 11" />
        <img src={} alt="Client logo 12" />
        <img src={} alt="Client logo 13" />
        <img src={} alt="Client logo 14" />
        <img src={} alt="Client logo 15" />  */}
      </div>
    </div>
  );
};

export default ClientsLogoGrid;
