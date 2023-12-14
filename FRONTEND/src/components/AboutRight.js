import "./aboutRight.css";
import logo from '../img/logo.png'
function AboutRight() {
  return (
    <>
      <div className="container">
        <div className="card">
          <img src={logo} className="card-img-top1" alt="..." height={180} width={450} />
          <div className="card-body">
            <h1 className="card-title">Our History</h1>
            <p className="card-text">
            Welcome to Exhibit Graphic Sign(EGS)
Established in 2010, Exhibit Graphic Sign(EGS) is a full service Production house and Printing solutions. We have a proven track record of high-quality signages, quick team response and detail-orientedness that set us apart from the competition. Over the years, our dedication to quality craftsmanship and customer service has earned us a solid reputation and strong presence in the industry.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutRight;
