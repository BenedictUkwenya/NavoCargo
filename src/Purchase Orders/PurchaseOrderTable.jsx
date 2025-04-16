// src/pages/PurchaseOrders/components/PurchaseOrdersTable.jsx
import React from 'react';
import './PurchaseOrdersTable.css';

const PurchaseOrdersTable = ({ orders }) => {
  // Function to render the appropriate status pill
  const renderStatus = (status) => {
    let statusClass = "po-status-pill";
    
    switch(status) {
      case 'Delivered':
        statusClass += " po-status-delivered";
        break;
      case 'Request':
        statusClass += " po-status-request";
        break;
      case 'Parcel Packed':
        statusClass += " po-status-packed";
        break;
      default:
        break;
    }
    
    return <span className={statusClass}>{status}</span>;
  };

  return (
    <div className="po-table-container">
      <table className="po-purchase-orders-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.userId}</td>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.country}</td>
              <td>{order.category}</td>
              <td>{order.quantity}</td>
              <td>{renderStatus(order.status)}</td>
              <td>
                <button className="po-view-btn">
                  <i className="po-eye-icon"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseOrdersTable;