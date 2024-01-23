import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { addUserData } from '../Services/api';


export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            name,
            email,
            password
        };
        addUserData(userData)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
       <div className='Signup-row1'>
         <div className="signup">
            <div className=" Signup-container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card">
                            <h2 className="card-title text-center">Register</h2>
                            <div className="card-body py-md-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            onChange={handleNameChange}
                                            className="form-control"
                                            id="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            onChange={handleEmailChange}
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            onChange={handlePasswordChange}
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="d-flex button flex-row align-items-center justify-content-between">
                                        <Link className='sign-up-button ' to="/Login">Login</Link>
                                        <button
                                            className="btn sign-up-button  button mt-8 btn-primary"
                                            type="submit"
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       </div>    );
}
