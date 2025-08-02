import React, { useState } from "react";
import "./SupplierHistory.css";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";

function SupplierHistory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25; // Updated to match the image (25 per page)
  const totalItems = 721;

  const data = [
    {
      product: "Chair",
      time: "11:23 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH001",
      remarks: "--",
    },
    {
      product: "T-Shirt",
      time: "11:23 PM",
      qty: "3 Pieces",
      movementType: "Stock Out",
      destination: "Warehouse 2",
      remarks: "--",
    },
    {
      product: "Wheel Chair",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "Warehouse 5",
      remarks: "1 Broken",
    },
    {
      product: "Strawberry",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "Warehouse 8",
      remarks: "All are Spoiled Fruits",
    },
    {
      product: "T-Shirt - Label MN",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock Out",
      destination: "Warehouse 9",
      remarks: "--",
    },
    {
      product: "Gaming Chair",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "Warehouse1",
      remarks: "--",
    },
    {
      product: "Luxury Bag",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH005",
      remarks: "--",
    },
    {
      product: "Purple T-Shirt",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH001",
      remarks: "--",
    },
    {
      product: "Sofa",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock In",
      destination: "WH001",
      remarks: "--",
    },
    {
      product: "Gaming Mouse",
      time: "11:13 PM",
      qty: "3 Pieces",
      movementType: "Stock Out",
      destination: "Warehouse 7",
      remarks: "--",
    },
  ];

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentData = data.slice(0, itemsPerPage); // Limit to itemsPerPage for the first page

  return (
    <div className="supplier-history-container">
      <div style={{display: 'flex', justifyContent: "space-between"}}>
        <div className="breadcrumb">
          <span style={{ color: "#676767" }}>Supplier</span>
          <span style={{ margin: "0 8px", color: "#676767" }}>
            <IoIosArrowForward />
          </span>
          <span style={{ color: "#262626" }}>Supplier History Log</span>
        </div>
        {/* Select Warehouse */}
        <div className="controls-right">
          <div className="warehouse-select-wrapper">
            <select className="warehouse-select">
              <option value="">Select Warehouse</option>
            </select>
          </div>
        </div>
      </div>
      <hr />

      <div className="supplier-history-controls">
        <div className="filter-tabs">
          {["All", "Stock In", "Stock Out", "Transfer", "Processing"].map(
            (label, index) => (
              <button key={index} className={label === "All" ? "active" : ""}>
                {label}
              </button>
            )
          )}
        </div>

        {/* search & filter icon arrow up & down icon*/}
        <div  style={{display: 'flex'}}>
          <div style={{border: "1px solid #E6E6E6", backgroundColor: "#FFFFFF", borderRadius: "4px", padding: '10px', gap:"4px"}}>
            <span><CiSearch /></span>
            <span><IoFilter /></span>
          </div>
          
          {/* up & down icon */}
          <div>
            <span><LuArrowUpDown />
</span>
          </div>

        </div>

      </div>

      <div className="supplier-history-table-container">
        <table className="supplier-history-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Product</th>
              <th>Time</th>
              <th>QTY</th>
              <th>Movement type</th>
              <th>Destination</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <img
                    src={`https://via.placeholder.com/30?text=${item.product[0]}`}
                    alt={item.product}
                    className="product-image"
                  />
                  {item.product}
                </td>
                <td>{item.time}</td>
                <td>{item.qty}</td>
                <td>
                  <span
                    className={`badge ${
                      item.movementType === "Stock In"
                        ? "stock-in"
                        : "stock-out"
                    }`}
                  >
                    {item.movementType}
                  </span>
                </td>
                <td>{item.destination}</td>
                <td>{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="supplier-history-pagination">
          <div className="pagination-box">25 per page</div>
          <div className="pagination-info">
            <span>
              {startIndex + 1}-{endIndex} of {totalItems}
            </span>
            <span style={{ color: "grey", margin: "0 8px" }}>|</span>
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              className="pagination-arrow"
            >
              &lt;
            </button>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              className="pagination-arrow"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupplierHistory;
