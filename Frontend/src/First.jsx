import { Outlet, useNavigate } from "react-router-dom";
import "./First.css";
import { FaUserFriends } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function First() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCustomerClick = () => {
    setShowCustomerDropdown(!showCustomerDropdown);
  };

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <div className="sidebar-header" onClick={handleImageClick}>
            <div className="sidebar-logo-text">
              {/* <img src={SupplierLogo} alt="SupplierLogo" className="supplier-logo" /> */}
              <MdWarehouse className="supplier-logo" />
              <span className="supplier-title">Supplier</span>
            </div>
            <IoIosArrowForward
              className={showDropdown ? "arrow-icon rotate" : "arrow-icon"}
            />
          </div>

          {showDropdown && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${
                  activeItem === "AllSuppliers" ? "active" : ""
                }`}
              >
                <Link to="/" className="link">
                  All Suppliers
                </Link>
              </li>
              <li
                className={`sidebar-list-all ${
                  activeItem === "SupplierHistory" ? "active" : ""
                }`}
              >
                <Link to="/SupplierHistory" className="link">
                  Supplier History
                </Link>
              </li>
            </ul>
          )}

          {/* Customer Section */}
          <div style={{ marginTop: "20px" }}>
            <div className="sidebar-header" onClick={handleCustomerClick}>
              <div className="sidebar-logo-text">
                <MdWarehouse className="supplier-logo" />
                <span className="supplier-title">Customer</span>
              </div>
              <IoIosArrowForward
                className={
                  showCustomerDropdown ? "arrow-icon rotate" : "arrow-icon"
                }
              />
            </div>

            {showCustomerDropdown && (
              <ul className="sidebar-unorder-list">
                <li
                  className={`sidebar-list-all ${
                    activeItem === "AllCustomers" ? "active" : ""
                  }`}
                  onClick={() =>
                    handleItemClick("AllCustomer", "/AllCustomer")
                  }
                >
                  <Link to="/AllCustomers" className="link">
                    All Customers
                  </Link>
                </li>
                <li
                  className={`sidebar-list-all ${
                    activeItem === "AddCustomer" ? "active" : ""
                  }`}
                  onClick={() => handleItemClick("AddCustomer", "/AddCustomer")}
                >
                  <Link to="/AddCustomer" className="link">
                    Add Customer
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default First;
