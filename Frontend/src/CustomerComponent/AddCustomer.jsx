import React from "react";
import "./AddCustomer.css";

function AddCustomer() {
  return (
    <div className="add-customer-container">
      <div className="breadcrumb">
        <span className="breadcrumb-grey">Customer</span>
        <span className="breadcrumb-arrow">›</span>
        <span className="breadcrumb-dark">Add Customer</span>
      </div>

      <div className="form-card">
        <h3>Basic Details</h3>
        <div className="form-group">
          <label>Customer</label>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter No." />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter Email" />
          </div>
        </div>
      </div>

      <div className="form-card">
        <h3>Business Address</h3>
        <div className="form-group">
          <label>Address Line 1</label>
          <textarea placeholder="Type here" rows={3}></textarea>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>State</label>
            <select>
              <option>Select State</option>
            </select>
          </div>
          <div className="form-group">
            <label>City</label>
            <select>
              <option>Select City</option>
            </select>
          </div>
          <div className="form-group">
            <label>Pin Code</label>
            <input type="text" placeholder="Enter Here" />
          </div>
        </div>
      </div>

      <div className="button-row">
        <button className="draft-btn">Draft</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
  );
}

export default AddCustomer;
