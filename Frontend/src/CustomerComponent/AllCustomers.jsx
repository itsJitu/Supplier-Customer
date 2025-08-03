import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";
import { LuArrowUpDown } from "react-icons/lu";
import "./AllCustomers.css";
import { Link } from "react-router-dom";

const customers = [
  {
    id: 1,
    name: "Rohan Kumar",
    address: "001 - Main Street, Springfield, USA",
    contact: "98765 43210",
    orders: 23,
    spent: "₹ 1,470.00",
  },
  {
    id: 2,
    name: "Anaya",
    address: "Graphic Tee - 123 Fashion Ave, New York, NY",
    contact: "98765 43210",
    orders: 11,
    spent: "₹ 14,98,70.00",
  },
  {
    id: 3,
    name: "Arjun Sharma",
    address: "Classic Tee - 456 Style Blvd, Los Angeles, CA",
    contact: "87654 32109",
    orders: 57,
    spent: "₹ 1,89,470.00",
  },
  {
    id: 4,
    name: "Rajesh",
    address: "V-Neck Tee - 789 Trendy Rd, Miami, FL",
    contact: "76543 21098",
    orders: 66,
    spent: "₹ 9,470.00",
  },
  {
    id: 5,
    name: "Ajay Srivastava",
    address: "Crew Neck Tee - 321 Chic St, Seattle, WA",
    contact: "65432 10987",
    orders: 36,
    spent: "₹ 1,44,560.00",
  },
  {
    id: 6,
    name: "Priya",
    address: "Long Sleeve Tee - 654 Casual Ln, Austin, TX",
    contact: "54321 09876",
    orders: 64,
    spent: "₹ 3,670.00",
  },
  {
    id: 7,
    name: "Jiya",
    address: "Pocket Tee - 987 Comfort Way, Denver, CO",
    contact: "43210 98765",
    orders: 1,
    spent: "₹ 70.00",
  },
  {
    id: 8,
    name: "Vikram Singh",
    address: "Striped Tee - 135 Pattern Pl, Boston, MA",
    contact: "32109 87654",
    orders: 7,
    spent: "₹ 1,110.00",
  },
  {
    id: 9,
    name: "Anjali",
    address: "Graphic Print Tee - 246 Art St, San Francisco, CA",
    contact: "21098 76543",
    orders: 567,
    spent: "₹ 86,72,460.00",
  },
  {
    id: 10,
    name: "Karan Kumar",
    address: "Eco-Friendly Tee - 369 Green Way, Portland, OR",
    contact: "10987 65432",
    orders: 71,
    spent: "₹ 14,95,70.00",
  },
];

function AllCustomers() {
  return (
    <div className="all-customers">
      <div className="breadcrumb">
        <div>All Customers</div>

        <div style={{ gap: "16px", display: "flex" }}>
          <Link to="/AddCustomer" className="add-btn">+ Add New Customer</Link>
          <select className="create-btn">
            <option value="">Create</option>
            <option value="">Create Sales</option>
            <option value="">Create Quotation</option>
            <option value="">Create Invoice</option>
          </select>
        </div>
      </div>

      <div className="top-bar">
        <div className="filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">New</button>
          <button className="filter-btn">
            <FaPlus />
          </button>
        </div>

        <div className="icon-group" style={{ display: "flex", gap: "16px" }}>
          <div
            className="icon-box"
            style={{
              borderRadius: "4px",
              gap: "4px",
              padding: "4px",
              border: "1px solid #F1F1F1",
              olor: "#676767",
            }}
          >
            <CiSearch />
            <IoFilter />
          </div>
          <div
            className="icon-box"
            style={{
              borderRadius: "4px",
              padding: "4px",
              border: "1px solid #F1F1F1",
              color: "#676767",
            }}
          >
            <LuArrowUpDown />
          </div>
        </div>
      </div>

      <table className="customer-table">
        <thead>
          <tr style={{ backgroundColor: "#e6e6e6" }}>
            <th>
              <input type="checkbox" />
            </th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Contact No.</th>
            <th>Total Order</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, i) => (
            <tr key={cust.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="customer-info">
                  <img
                    src="https://via.placeholder.com/32"
                    alt="avatar"
                    className="avatar"
                  />
                  {cust.name}
                </div>
              </td>
              <td>{cust.address}</td>
              <td>{cust.contact}</td>
              <td>{cust.orders.toString().padStart(2, "0")}</td>
              <td>{cust.spent}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <select style={{ border: "1px solid #F1F1F1", padding: "4px" }}>
          <option>10 per page</option>
        </select>
        <div style={{ border: "1px solid #F1F1F1", padding: "4px" }}>
          <span>1-25 of 369</span>
          <button style={{ border: "none", background: "transparent" }}>
            <MdKeyboardArrowLeft />
          </button>
          <button style={{ border: "none", background: "transparent" }}>
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllCustomers;
