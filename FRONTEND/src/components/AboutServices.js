import "./aboutServices.css";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import Form from "./Form";
import exhibiton from  "../img/exhibition.png"
import office from "../img/OfficeBranding.png";
import sign from "../img/sign.png";
import signboard from "../img/signboard.png";
import corporate from "../img/corporate.png";
import printing from "../img/printing.png";
import {Link} from "react-router-dom";
function AboutServices() {
  return (
    <> <div className="container"   >
      <div className="services-container" >
      <div className="service-item" style={{backgroundColor: '#f4f4f4', }}>

        
        <Link to="/exhibition" style={{textDecoration:"none", color:"black"}}>
          <img src={exhibiton} alt="Exhibition Stands" style={{height:"60px", width: "60px"}}/><h3 style={{textDecoration:"none"}}>Exhibition</h3>
        <p>Your search for a complete Exhibition experience ends here.</p></Link>
      </div>
      <div className="service-item">
       
      <Link to="/showroom" style={{textDecoration:"none",}}>
      <img src={office} alt="Showroom & Office Branding"style={{height:"60px", width: "60px"}} />
        <h3>Showroom and Office Branding</h3></Link>
        <p>With over a decade of manufacturing and installation experience in indoor and outdoor sign5</p>
      </div>
      <div className="service-item" style={{backgroundColor: '#f4f4f4' }}>
            <Link to="/sign" style={{textDecoration:"none", color:"black"}}>
            <img src={sign} alt="Signages Indoor & Outdoor"style={{height:"60px", width: "60px"}} />
              <h3>Signages Indoor & Outdoor</h3> </Link>   
              <p>With over a decade of manufacturing and installation experience in indoor and outdoor sign5</p>

      </div>
      <div className="service-item">
       <Link to="/retail" style={{textDecoration:"none", color:"black"}}>
       <img src={signboard} alt="Retail Branding & Displays"style={{height:"60px", width: "60px"}} />
         <h3>Retail Branding & Displays</h3></Link>
         <p>With over a decade of manufacturing and installation experience in indoor and outdoor sign5</p>

      </div>
      <div className="service-item" style={{backgroundColor: '#f4f4f4' }}>
       <Link to='/corporate' style={{textDecoration:"none", color:"black"}}>
       <img src={corporate} alt="Corporate Events Branding"style={{height:"60px", width: "60px"}} />
         <h3>Corporate Events Branding</h3></Link>
         <p>With over a decade of manufacturing and installation experience in indoor and outdoor sign5</p>

      </div>
      <div className="service-item">
        
        <Link to='/print'style={{textDecoration:"none", color:"black"}}>
        <img src={printing} alt="Large Format Printing"style={{height:"60px", width: "60px"}} />
        <h3>Large Format Printing</h3>
        <p>With over a decade of manufacturing and installation experience in indoor and outdoor sign5</p>
</Link>
      </div>
    </div>
    </div>
   
    </>
  );
}

export default AboutServices;
{/* <div className="ok">
      <div className="row aboutservices-row1">
      <div className="aboutservices-text"> 
        <h1 className="aboutservices-p">WE’RE MORE THAN A DIGITAL AGENCY</h1></div>
     </div>

     <div className="container"><div className="row aboutservices-row2">
        <div className="col cols-md-4">
            <div className="container aboutservices-text-container">
                <h3>Welcome to Exhibit Graphic Sign(EGS)</h3>
                <p>Established in 2010, Exhibit Graphic Sign(EGS) is a full service Production house and Printing solutions. We have a proven track record of high-quality signages, quick team response and detail-orientedness that set us apart from the competition. Over the years, our dedication to quality craftsmanship and customer service has earned us a solid reputation and strong presence in the industry.</p>
            </div>
        </div>
        <div className="col cols-md-4">
        <div className="container aboutservices-text-container">
        <h3>Our Mission and Values</h3>
                <p>Exhibit Graphic Sign(EGS) mission is to be a trust worthy Organization in Events, Exhibitions, Visibility Signage Solutions and Marketing/Branding Execution of multinational brands in UAE.Our aim is to earn respect by offring best quality services, competitive rates and on-time delivery. Core Values of our Organisation is Respect, Quality, Trust, Creativity & Innovation.</p>
        </div>
        </div>
        <div className="col cols-md-4">
        <div className="container aboutservices-text-container">
        <h3>Experienced Team</h3>
                <p>With over a decade of manufacturing and installation experience, we continue to deliver excellence in design, fabrication and execution of jobs with transparency and accountability of our executed projects. Catering to different segments of Advertising industry, our excellent and experienced team can turn any imagination to reality with their craFsmanship.</p>
        </div>
        </div>
     </div></div> </div> */}