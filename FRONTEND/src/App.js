
 import Navbar from './components/Navbar';
 import './App.css';
 import Home from './components/Home';
import NewSidebar from './components/NewSidebar';
 import About from './components/About';
 import Admin from './components/Admin';
 import RecentOrder from './components/RecentOrder';
 import TrackOrders from './components/TrackOrders';
import Showreview from  './components/ShowReviews';
 import ProductPage from './components/ProductPage';

 import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Routes
 } from "react-router-dom";
 import RecOrd from './components/RecOrd';
 import AboutServices from './components/AboutServices';
 import CancelledOrders from './components/CancelledOrders';
 import Exhibition from './components/Exhibition';
 import Showroom from './components/Showroom';
 import Signage from './components/Signages';
 import Retail from './components/Retail';
 import Corp from './components/Corp';
 import Print from './components/Print';
 import Quote from './components/QuotePage';
 import Cart from './components/Cart';
import Addproduct from './components/Addproduct';
import Productview from './components/Productview';
import ReviewsRight from './components/ReviewsRight';
import Prac from './components/Prac';


 function App() {
   return (
     <>
   <div className="container-fluid">
     <Navbar />
    
     <Routes>
     <Route path='*' element={<Home/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/aboutservices' element={<AboutServices/>}></Route>
       <Route path='/admin' element={<Admin/>}></Route>
       <Route path='/recentorders' element={<RecOrd/>}></Route>
       <Route path='/trackorders' element={<TrackOrders/>}></Route>
       <Route path='/cancelledorders' element={<CancelledOrders/>}></Route>
       <Route path='/productpage' element={<ProductPage/>}></Route>
       <Route path='/exhibition' element={<Exhibition/>}></Route>
       <Route path='/showroom' element={<Showroom/>}></Route>
       <Route path='/sign' element={<Signage/>}></Route>
       <Route path='/retail' element={<Retail/>}></Route>
       <Route path='/corporate' element={<Corp/>}></Route>
       <Route path='/print' element={<Print/>}></Route>
      <Route path='/viewproducts' element={<Productview/>}></Route>
     <Route path='/AddProduct'  element={<Addproduct/>}></Route>
     <Route path='/reviews'  element={<ReviewsRight/>}></Route>
     <Route path='/showreviews' element={<Showreview/>}></Route>
     <Route path='/ManageProducts' element={<Productview/>}></Route>
     <Route path='prac' element={<Prac/>}></Route>
     {/* <Route path='/viewproducts' element={<Productview/>}></Route> */}
     </Routes>
 </div>

 
   
 

  
 
   
     </>
   );
 }

 export default App;
