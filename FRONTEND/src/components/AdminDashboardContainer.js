import "./admin.css";
// import adminImg from "../Img/admin.png";
import Navbar from "./Navbar";
import AdminSideBar from "./AdminSideBar";
import AdminDashboard from "./AdminDashboard";
import adminlogo from "../img/adminlogo.png"
import "./adminDashboard.css";
function AdminDashboardContainer() {
  return (
    <>
      <div className="bg-light container-fluid">
       
        <div className="row row11">
          <div className="col col-md-3">
            
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
            <AdminDashboard />
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

export default AdminDashboardContainer;
