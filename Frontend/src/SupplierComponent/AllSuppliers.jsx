import React from "react";
import "./AllSupplier.css";
import MoneyBag from "../images/MoneyBag.png";
import RadioActive from "../images/Radioactive.png";
import CircleLogo from "../images/Circlelogo.png";
import { FaSearch } from "react-icons/fa";

function AllSuppliers() {
  return (
    <div className="all-supplier-container">
      <div className="supplier-header">
        <h3>Supplier</h3>

        {/* Three-Box */}
        <div className="three-box">
          {/* All Parties */}
          <div className="money-bag">
            <div>
              <img src={MoneyBag} alt="money" />
            </div>
            <div className="bag-content">
              <span style={{ color: "#676767", marginTop: "50px" }}>All Parties</span>
              <br />
              <span style={{textAlign: "left"}}>
                <b>14</b>
              </span>
            </div>
          </div>

          {/* To Receive */}
          <div className="radio-active">
            <div>
              <img src={RadioActive} alt="money" />
            </div>
            <div className="bag-content">
              <span style={{ color: "#676767", marginTop: "50px" }}>To Receive</span>
              <br />
              <span style={{textAlign: "left"}}>
                <b>₹12,75,987</b>
              </span>
            </div>
          </div>

          {/* To Pay */}
          <div className="Circle-logo">
            <div>
              <img src={CircleLogo} alt="money" />
            </div>
            <div className="bag-content">
              <span style={{ color: "#676767", marginTop: "50px" }}>To Pay </span>
              <br />
              <span style={{textAlign: "left"}}>
                <b>₹5,987</b>
              </span>
            </div>
          </div>

        </div>

        {/* Search Category & Add Supplier */}
        <div className="sea-cat-add" >
          {/* Search */}
          <div className="search">
            <FaSearch />
            <input type="search" placeholder="Search" style={{border: "none"}}/>
          </div>
          {/* Category */}
          <div></div>
          {/* Add Supplier */}
          <div></div>
        </div>

      </div>
    </div>
  );
}

export default AllSuppliers;
