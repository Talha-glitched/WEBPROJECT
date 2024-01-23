import React, { useState } from 'react';
import './login.css'; // CSS file for styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
axios.defaults.withCredentials = true;
 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const result = await axios.post('http://localhost:5000/login', { email, password });

    if (result.data.message === 'Successful') {
      const token = result.data.token;
      // Store the token in localStorage or sessionStorage for later use
      localStorage.setItem('token', JSON.stringify(token)); // Example using localStorage

      navigate('/home'); // Redirect to the home screen upon successful login
    } else {
      alert(result.data.message); // Display error message from backend
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};


  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="sign-in-button" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
