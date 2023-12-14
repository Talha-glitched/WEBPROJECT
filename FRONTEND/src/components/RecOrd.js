import "./admin.css";
// import adminImg from "../Img/admin.png";
import Navbar from "./Navbar";
import AdminSideBar from "./AdminSideBar";
import Trackorderleft from "./Trackorderleft";
import Orders from "./Orders";
import adminlogo from "../img/adminlogo.png"
import RecentOrder from "./RecentOrder";
function RecOrd() {
  return (
    <>
      <div className="container-fluid">
       
        <div className="row row11">
          <div className="col col-md-3">
            <div className="row row10">
              <img className="admin-img" src={adminlogo} alt="" />
              <h5>Admin Dashboard</h5>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
        <RecentOrder/>
          </div>
        </div>
        <div className="row row12">
          <h6>©Exhibit Graphic Sign(EGS) LLC. All rights reserved
Call +971559542864 || WhatsApp +971559542864</h6>
        </div>
      </div>
    </>
  );
}

export default RecOrd;
