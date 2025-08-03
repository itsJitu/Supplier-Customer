import React, { useState } from "react";
import "./AddCustomer.css";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


function AddCustomer() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSave = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="add-customer-container">
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <span className="breadcrumb-grey">Customer</span>
        <span className="breadcrumb-arrow">
          <IoIosArrowForward />
        </span>
        <span className="breadcrumb-dark">Add Customer</span>
      </div>

      
      

      <div className="form-wrapper">
        {/* ✅ Inline Success Message */}
        {formSubmitted && (
        <div
          style={{
            marginTop: "16px",
            marginBottom:'20px',
            width: "100%",
            border: "1px solid #007B42",
            backgroundColor: "#BAFFDF",
            borderRadius: "8px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: "500",
            maxWidth: "500px",
            marginInline: "auto",
            
          }}
        >
          🎉 Great! You have successfully created a customer.
        </div>
      )}
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

        {/* ✅ Button Row aligned to left */}
        <div className="button-row">
          {!formSubmitted ? (
            <>
              <button className="draft-btn">Draft</button>
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <Link to="/AllCustomer" className="done-btn">Done</Link>

          )}
        </div>
      </div>
    </div>
  );
}

export default AddCustomer;
