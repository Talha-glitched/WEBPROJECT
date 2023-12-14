import './home.css';
import Products from './Products';
import Carousel from './Carousel';
import About from './About';
import HomeQual from './HomeQual';
import Pending from './Pending';
import ClientsLogoGrid from './ClientsLogoGrid';
import AboutServices from './AboutServices';




function Home() {
  return (
    <div >
<Carousel/>
<HomeQual/>
<h1 style={{color:"#8D8D8D", fontWeight:"700",marginTop:"20px"}}>Our Services</h1>
<AboutServices/>

<h1 className='headding'>Best Seller</h1>
<Products/>
<h1>What we Do?</h1>
<ClientsLogoGrid/>  



 
   
 

  
 
   
    </div>
  );
}

export default Home;
