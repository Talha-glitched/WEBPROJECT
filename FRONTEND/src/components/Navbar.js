import './navbar.css';
import { useState } from 'react'; 
import logo from "../img/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
   
    return (
        <>
        <div className="row row1">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand " href="/home"><img  className ="logo"src={logo} alt=""/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/home" class="nav-link">Home</Link>
                            
                            </li>

                            <li class="nav-item">
                                <Link to="/aboutservices" class="nav-link">About Us</Link>
                            
                            </li>
                            
                            <li class="nav-item" item >
                                <Link to="/admin" class="nav-link" >Admin</Link>
                                
                            </li>
                            <li class="nav-item" item >
                                <Link to="/productpage" class="nav-link" >Products</Link>
                                
                            </li>
                            <li class="nav-item" item >
                                <Link to="/reviews" class="nav-link" >Instant Quote</Link>
                                
                            </li>
                            {/* <li class="nav-item" item >
                                <Link to="/viewproducts" class="nav-link" >Manage Products </Link>
                                
                            </li> */}
                            
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>
        </>
    );
}

export default Navbar;
