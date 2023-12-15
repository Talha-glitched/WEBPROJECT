import React, { useEffect, useState } from 'react';
import "./prac.css"
import pr2 from "../img/Products/pr2.jpg";
const prac = () => {
    const buttonStyle = { marginRight: '30px' };

    return (
        <div>
            <div>
                <div
                    className="card"
                    style={{
                        
                        height: '25rem',
                        width: '15rem',
                        borderRadius: '20px',
                        margin: '5px',
                        padding: '15px',
                    }}

                >
                    <img
                        src={pr2}
                        className="card-img"
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderTopLeftRadius: '15px',
                            borderTopRightRadius: '15px',
                            
                            backgroundColor: 'black',
                        }}
                    />
                    <div
                        className="card-body"
                        style={{
                            borderBottomLeftRadius: '15px',
                            borderBottomRightRadius: '15px',
                            overflow: 'hidden',
                            backgroundColor: 'black',
                        }}
                    >
                        <p>ID: </p>
                        <h5 className="card-title">Name:  </h5>
                        <p className="card-text">Description:  </p>
                        <p className="card-text">Price:  </p>
                        <a href="#" className="btn btn-primary">
                            View Details
                        </a>
                        <div className="d-flex" style={{ padding: '10px' }}>
                            <button
                                className="btn btn-secondary"
                                style={buttonStyle}

                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"

                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
                

            </div>




        </div>

    )
};
export default prac;