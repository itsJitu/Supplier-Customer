import { Outlet, useNavigate } from "react-router-dom";
import "./First.css";
import SupplierLogo from "./images/Suppliergroup.png";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

function First() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = () => {
    setShowDropdown(!showDropdown);
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
              <img src={SupplierLogo} alt="SupplierLogo" className="supplier-logo" />
              <span className="supplier-title">Supplier</span>
            </div>
            <IoIosArrowForward className={showDropdown ? "arrow-icon rotate" : "arrow-icon"} />
          </div>

          {showDropdown && (
            <ul className="sidebar-unorder-list">
              <li
                className={`sidebar-list-all ${activeItem === "AllSuppliers" ? "active" : ""}`}
              >
                <Link to="/" className="link">All Suppliers</Link> 
              </li>
              <li
                className={`sidebar-list-all ${activeItem === "SupplierHistory" ? "active" : ""}`}
              >
               <Link to="/SupplierHistory" className="link">Supplier History</Link>
              </li>
            </ul>
          )}
        </div>

        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default First;
