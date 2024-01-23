import "./adminSideBar.css";
import { Link } from "react-router-dom";
import TrackOrders from "./Trackorderleft";
import Admin from "./Admin";
import icon1 from "../img/icon1.png";
import icon3 from "../img/icon3.png";
import icon2 from "../img/icon2.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import icon7 from "../img/icon7.png";

function AdminSideBar() {
  return (
    <>
      <div className="list-group admin-side-bar" >
        <Link to="/recentorders" className="list_item_old  list-group-item side-bar-list  ">
          <span><img src={icon1} /></span>
          Recent Orders
        </Link>
       <Link to="/trackorders"  className="list_item_old list-group-item side-bar-list ">
       <span><img src={icon4}/></span>Track Orders
       </Link>
       <Link to="/ManageProducts"  className="list_item_old list-group-item side-bar-list ">
       <span><img src={icon2}/></span>  Manage Products
       </Link>
        <Link to="/AddProduct" className="list_item_old list-group-item side-bar-list ">
        <span><img src={icon3}/></span>    Add Products
        </Link>            
        <a
          href="#"
          className="list_item list-group-item side-bar-list "
        >
        <span><img src={icon5}/></span>  Manage Clients
        </a>
        <a
          href="#"
          className="list_item list-group-item side-bar-list "
        >
        <span><img src={icon6}/></span>  Administrator Settings
        </a>
        <a
          href="#"
          className="list_item list-group-item side-bar-list "
        >
       <span><img src={icon7}/></span>   Feedbacks
        </a>
      </div>
    </>
  );
}

export default AdminSideBar;
