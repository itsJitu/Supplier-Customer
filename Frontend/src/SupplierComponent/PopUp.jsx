import React from "react";
import "./PopUp.css";

const PopUp = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Header Buttons */}
        <div className="popup-top-bar">
          <button className="status-btn stock-in">Stock In</button>
          <select className="status-select">
            <option>Reached</option>
            <option>In Transit</option>
          </select>
        </div>

        {/* Reference and Date */}
        <div className="popup-header">
          <span>Reference No. :- <strong>{data.referenceNo}</strong></span>
          <span>Date :- {data.date}</span>
        </div>

        {/* Supplier and Destination */}
        <div className="popup-section">
          <div><strong>Supplier</strong><br />{data.supplier}</div>
          <div><strong>Destination</strong><br />{data.destination}</div>
        </div>

        {/* Product Table */}
        <div className="popup-table-container">
          <table className="popup-table">
            <thead>
              <tr>
                <th></th>
                <th>Products</th>
                <th>SKU</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {data.products.map((product, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.quantity}</td>
                  <td>₹ {product.unitPrice.toLocaleString()}</td>
                  <td>₹ {product.totalPrice.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="popup-summary">
          <div className="summary-line">Subtotal <span>₹ {data.subtotal.toLocaleString()}</span></div>
          <div className="summary-line">CGST <span>{data.cgst}%</span></div>
          <div className="summary-line">SGST <span>{data.sgst}%</span></div>
          <div className="summary-line">Shipping Charges <span>₹ {data.shippingCharges.toLocaleString()}</span></div>
          <div className="summary-line total">Total Price <span>₹ {data.totalPrice.toLocaleString()}</span></div>
        </div>

        {/* Other Info */}
        <div className="popup-other-info">
          <div><strong>Payments Method</strong><br />{data.paymentMethod}</div>
          <div><strong>Courier Partner</strong><br />{data.courierPartner}</div>
          <div><strong>Arrival Time</strong><br />{data.arrivalTime}</div>
        </div>

        {/* Close Button */}
        <button className="popup-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
