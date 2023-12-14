import "./about.css";
import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";
import Form from "./Form";

function About() {
  return (
    <>
      <div className=" row row5">
      <div className='container'>
     
<div className='col col-md-4 form'>

  <AboutRight/>
</div>
<div className='col col-md-5'>
  <AboutLeft/>
</div>
      </div>
    </div>
    </>
  );
}

export default About;
