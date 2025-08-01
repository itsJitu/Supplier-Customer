import React from "react";
import "./AddSupplier.css";
import { IoIosArrowForward } from "react-icons/io";

function AddSupplier() {
  return (
    <div>
      {/* header navigation */}
      <div className="add-supplier-header">
        <div className="breadcrumb">
          <span className="grey-text">Supplier</span>
          <IoIosArrowForward className="arrow-icon" />
          <span className="black-text">Add Supplier</span>
        </div>
      </div>

      {/* Basic Details Div */}
      <div className="form-data">
        <div className="details">
          <span>Basic Details</span>
          <div className="supplier-bussiness">
            {/* Supplier */}
            <div className="Supplier">
              <span style={{ color: "#262626" }}>Supplier</span>
              <br />
              <input
                type="text"
                placeholder="Enter Name"
                className="supplier-input"
              />
            </div>

            {/* Business Type */}
            <div className="Businesstype">
              <span style={{ color: "#262626" }}>Business Type</span>
              <br />
              <select className="supplier-select" style={{ color: "#676767" }}>
                <option value="" disabled>
                  Select
                </option>
                <option value="manufacturer">Manufacturer</option>
                <option value="Distributor">Distributor</option>
                <option value="Wholesaler">Wholesaler</option>
              </select>
            </div>
          </div>

          {/* Supplier Code */}
          <div className="code">
            <span>Supplier Code </span>
            <br />
            <div className="input-btn">
              <input type="text" style={{ border: "none" }} />
              <button
                style={{
                  color: "white",
                  backgroundColor: "#077aff",
                  padding: "8px 10px",
                  border: "none",
                  borderRadius: "6px",
                }}
              >
                Auto generate
              </button>
            </div>
          </div>

          {/* GSTIN */}
          <div className="gst">
            <span>GSTIN</span>
            <br />
            <input type="text" placeholder="None" className="gst-input" />
          </div>
        </div>

        {/*  Contact information   */}

        <div className="Contact">
          <span> Contact Information </span>
          <div className="contact-person-name">
            <span> Contact Person Name </span>
            <br />
            <input
              type="text"
              placeholder="Enter Name"
              className="contact-input"
            />
          </div>

          {/* phone & Email Address */}
          <div className="phone-email">
            {/* Phone Number */}
            <div style={{ width: "50%" }}>
              <span>Phone Number</span>
              <br />
              <input
                type="Number"
                placeholder="Enter No."
                className="number-int"
              />
            </div>
            {/* email address */}
            <div style={{ width: "50%" }}>
              <span>Email Address</span>
              <br />
              <input
                type="email"
                placeholder="Enter Email"
                className="email-input"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AddSupplier;
