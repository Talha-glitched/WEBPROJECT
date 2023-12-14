import "./adminSideBar.css";
import { Link } from "react-router-dom";
import TrackOrders from "./Trackorderleft";
import Admin from "./Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
function AdminSideBar() {
  return (
    <>
      <div className="list-group admin-side-bar">
        <Link to="/recentorders" className="list-group-item side-bar-list list-group-item-action !active">
          Recent Orders
        </Link>
       <Link to="/trackorders"  className="list-group-item side-bar-list list-group-item-action">
        Track Orders
       </Link>
       <Link to="/ManageProducts"  className="list-group-item side-bar-list list-group-item-action">
         Manage Products
       </Link>
        <Link to="/AddProduct" className="list-group-item side-bar-list list-group-item-action">
          Add Products
        </Link>    
        



        <a
          href="#"
          className="list-group-item side-bar-list list-group-item-action"
        >
          Manage Clients
        </a>
        <a
          href="#"
          className="list-group-item side-bar-list list-group-item-action"
        >
          Administrator Settings
        </a>
        <a
          href="#"
          className="list-group-item side-bar-list list-group-item-action"
        >
          Feedbacks
        </a>
      </div>
    </>
  );
}

export default AdminSideBar;
