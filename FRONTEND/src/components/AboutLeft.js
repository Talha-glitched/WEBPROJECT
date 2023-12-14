import "./aboutRight.css";
import logo from '../img/logo.png'; 
import Velocity from '../img/Velocity.jpg';
import cube from '../img/cube.png';
import GPLOGO from '../img/GPLOGO.jpg';
import Fakhr from '../img/Fakhr.png';
import Prism from '../img/Prism.png';
function AboutLeft() {
  return (
    <>
      <div className="container">
        <div className="card">
            <div className="images"> 
          <img src={cube} className="card-img-top1" alt="..." height={100} width={100}/>
          <img src={Velocity} className="card-img-top1" alt="..." height={100} width={100}/>
          <img src={GPLOGO} className="card-img-top1" alt="..." height={100} width={100}/>
          <img src={Fakhr} className="card-img-top1" alt="..." height={100} width={100}/>
          <img src={Prism} className="card-img-top1 images" alt="..." height={150} width={250}/>
          </div>
          <div className="card-body">
            <h1 className="card-title">Testimonials </h1>
            <p className="card-text">
            I would like to take this opportunity to thank Exhibit Graphic Sign(EGS)Team. We placed an order of Signage Boards for use at one of our scanning sites in a client premise. Exhibit Graphic Sign(EGS) Team came up with a clean and elegant design. Our client was also impressed to see the signage boards and we were using these boards at all of our backlog digitalization/ scanning sites. Thank you for your high standard and quality of service.------- Masuood-Rashid 
          </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutLeft;