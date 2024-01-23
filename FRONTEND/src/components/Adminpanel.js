import React from 'react'
import './adminpanel.css';
import logo from "../img/Logos/newlogo.png";
import icon1 from "../img/icon1.png";
import icon3 from "../img/icon3.png";
import icon2 from "../img/icon2.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import icon7 from "../img/icon7.png";
import prof1 from "../img/Profiles/1.jpg";
import prof2 from "../img/Profiles/2.jpg";
import prof3 from "../img/Profiles/3.jpg";
import prof4 from "../img/Profiles/4.jpg";
import profile from "../img/Profiles/1.jpg";
import search from "../img/Logos/search.png";
import { Link } from 'react-router-dom';
export default function Adminpanel() {
    return (
        <div className='main' style={{ marginTop: "20px" }}>
            <section id="menu">
                <div className='logo'>
                    <img src={logo} alt="logo" />
                    <h2>Admin</h2>
                </div>
                <div className='items'>
                    <li className='list_item' ><i> <img src={icon1}></img> Add Products</i></li>
                    <li className='list_item'> <i> <img src={icon2}></img> Manage Product</i></li>
                    <li className='list_item'><i> <img src={icon3}></img> Edit Product</i></li>
                    <li className='list_item'><i> <img src={icon4}></img> View Products</i></li>
                    <li className='list_item'><i> <img src={icon5}></img> Manage User Reviews</i></li>
                </div>

            </section>
            <section id="interface">
                <div className='navigation'>
                    <div className="n1">
                        <div className="search">
                            <i className=''> <img src={search} alt="" />
                            </i>
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="profile">
                        <i><img src={profile} alt="" /></i>
                    </div>
                </div>
                <h3 className="iname">
                    Dashboard
                </h3>
                <div className="values">
                    <div className="val-box">
                        <i className='fas fa-users'></i>
                        <div>
                            <h3>8,265</h3>
                            <span>New Users</span>
                        </div>
                    </div>
                    <div className="val-box">
                        <i className='fas fa-shopping-cart'></i>
                        <div>
                            <h3>8,265</h3>
                            <span>New Users</span>
                        </div>
                    </div>
                    <div className="val-box">
                        <i className='fa-solid fa-envelope'></i>
                        <div>
                            <h3>8,265</h3>
                            <span>New Users</span>
                        </div>
                    </div>
                    <div className="val-box">
                        <i className='fas fa-dollar-sign'></i>
                        <div>
                            <h3>8,265</h3>
                            <span>New Users</span>
                        </div>
                    </div>
                </div>
                <div className="board">
                    <table width={"100%"}>
                        <thead>
                            
                                <td>Name </td>
                                <td>Title</td>
                                <td>Status</td>
                                <td>Role</td>
                                <td></td>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td className="people">
                                    <img src={prof1} alt="" />
                                    <div className="people-de">
                                    <h5>Mike Oxlong</h5>
                                    <p>Mike@gmail.com</p>
                                    </div>
                                </td>
                                <td className='people-des'>
                                <h5>Software Engineer</h5>
                                    <p>Web Dev</p>
                                </td>
                                   <td className='active'><p>Active</p></td>
                                   <td className='role'><p>Owner</p></td>
                                   <td className='edit'><p>Edit</p></td>
                            </tr>
                            <tr>
                                <td className="people">
                                    <img src={prof1} alt="" />
                                    <div className="people-de">
                                    <h5>Mike Oxlong</h5>
                                    <p>Mike@gmail.com</p>
                                    </div>
                                </td>
                                <td className='people-des'>
                                <h5>Software Engineer</h5>
                                    <p>Web Dev</p>
                                </td>
                                   <td className='active'><p>Active</p></td>
                                   <td className='role'><p>Owner</p></td>
                                   <td className='edit'><p>Edit</p></td>
                            </tr>
                            <tr>
                                <td className="people">
                                    <img src={prof1} alt="" />
                                    <div className="people-de">
                                    <h5>Mike Oxlong</h5>
                                    <p>Mike@gmail.com</p>
                                    </div>
                                </td>
                                <td className='people-des'>
                                <h5>Software Engineer</h5>
                                    <p>Web Dev</p>
                                </td>
                                   <td className='active'><p>Active</p></td>
                                   <td className='role'><p>Owner</p></td>
                                   <td className='edit'><p>Edit</p></td>
                            </tr>
                            <tr>
                                <td className="people">
                                    <img src={prof1} alt="" />
                                    <div className="people-de">
                                    <h5>Mike Oxlong</h5>
                                    <p>Mike@gmail.com</p>
                                    </div>
                                </td>
                                <td className='people-des'>
                                <h5>Software Engineer</h5>
                                    <p>Web Dev</p>
                                </td>
                                   <td className='active'><p>Active</p></td>
                                   <td className='role'><p>Owner</p></td>
                                   <td className='edit'><p>Edit</p></td>
                            </tr>
                            <tr>
                                <td className="people">
                                    <img src={prof1} alt="" />
                                    <div className="people-de">
                                    <h5>Mike Oxlong</h5>
                                    <p>Mike@gmail.com</p>
                                    </div>
                                </td>
                                <td className='people-des'>
                                <h5>Software Engineer</h5>
                                    <p>Web Dev</p>
                                </td>
                                   <td className='active'><p>Active</p></td>
                                   <td className='role'><p>Owner</p></td>
                                   <td className='edit'><p>Edit</p></td>
                            </tr>
                            <tr>
                                <td className="people">
                                    <img src={prof1} alt="" />
                                    <div className="people-de">
                                    <h5>Mike Oxlong</h5>
                                    <p>Mike@gmail.com</p>
                                    </div>
                                </td>
                                <td className='people-des'>
                                <h5>Software Engineer</h5>
                                    <p>Web Dev</p>
                                </td>
                                   <td className='active'><p>Active</p></td>
                                   <td className='role'><p>Owner</p></td>
                                   <td className='edit'><p>Edit</p></td>
                            </tr>
                        </tbody>
                        
                        
                         </table>
                </div>
                </section>

        </div>
    )
}
