import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const RequireAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const navigate = useNavigate();
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login'); // Redirect to the login page if token doesn't exist
      }
      if (token) {
        navigate('/home'); // Redirect to the home page if token exists
      }
    }, [navigate]);

    return localStorage.getItem('token') ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};


export default RequireAuth;
