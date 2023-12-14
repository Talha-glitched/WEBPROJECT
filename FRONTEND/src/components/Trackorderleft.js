import React from 'react';
import './trackOrders.css';

function TrackOrders() {
    return (
        <>
        <div className='container track-container'>
            <h1 className='tracktxt'>Track Orders</h1>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter your tracking number</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tracking number"/>
</div>
<div class="mb-3">
<button class="btn track-btn btn-outline-success" type="submit">Submit</button>
</div>
        </div>
        </>
    );
}

export default TrackOrders;
