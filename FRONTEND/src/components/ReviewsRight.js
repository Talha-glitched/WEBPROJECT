import React, { useState } from "react";
import { addquote } from "../Services/api";

function ReviewsRight() {
  const [quotedata, setquotedata] = useState({
    name: "",
    contact: "",
    email: "",
    requirement: "",
  });

  const handlechange = async(e) => {
    setquotedata({ ...quotedata, [e.target.name]: e.target.value });
    console.log(JSON.stringify(quotedata));
  };

  const handlesend = async (e) => {
    e.preventDefault();
    await addquote(quotedata);
  };

  return (
    <div className="container review-form-container" style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 className="" style={{ color: "black" }}>Get a Quote</h1>
      <form className="row g-3" onSubmit={(e) => handlesend(e)} style={{ display: 'flex', flexDirection: 'column' }}> 
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label review-form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={quotedata.name}
            onChange={(e) => handlechange(e)}
            style={{ width: "200%" }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputContact4" className="form-label review-form-label">
            Contact
          </label>
          <input
            style={{ width: "200%" }}
            type="number"
            className="form-control"
            id="contact"
            name="contact"
            value={quotedata.contact}
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputEmail4" className="form-label review-form-label">
            Email
          </label>
          <input
            style={{ width: "95%" }}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={quotedata.email}
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div className="col-md-12">
          <label htmlFor="inputOpinion4" className="form-label review-form-label">
            Your Requirements
          </label>
          <input
            style={{ width: "95%", height: "100px" }}
            type="text"
            className="form-control review-form-input"
            id="opinion"
            name="requirement"
            value={quotedata.requirement}
            onChange={(e) => handlechange(e)}
          />
        </div>
        <div className="col-12 review-btn">
          <button type="submit" className="btn btn-outline-dark">
            Get an Instant Quote
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewsRight;
