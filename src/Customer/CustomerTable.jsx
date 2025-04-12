// CustomersTable.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomersTable.css';

const CustomersTable = ({ customers }) => {
  return (
    <div className="customers-table-container">
      <table className="customers-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Phone no.</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.dateCreated}</td>
              <td>
                <span className={`status-badge ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
              <td>
                <button className="more-actions-btn">
                <NavLink to="/customer-details">
                  <img src="more-icon.svg" alt="More actions" width="30px" height="30px" />
                </NavLink>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-footer">
        <div className="pagination-info">
          Showing 1-09 of 78
        </div>
        <div className="pagination-controls">
          <button className="pagination-btn prev">
            <span>&#8249;</span>
          </button>
          <button className="pagination-btn next">
            <span>&#8250;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomersTable;