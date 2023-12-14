import React, { useState } from 'react';
import './quotepage.css';

function QuotePage() {
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !companyName || !contactNumber || !email) {
      setErrorMessage('Please provide all necessary information');
    } else {
      setErrorMessage('');
     
      setShowPopup(true);
    }
  };

  return (
    <div className="quick-quote-container">
      <h1>Quick Quote</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="details">Details:</label>
          <input
            type="text"
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <button className='sub' type="submit">Submit</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {showPopup && (
        <div className="popup">
          <p>You will be notified of a quote ASAP</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default QuotePage;
