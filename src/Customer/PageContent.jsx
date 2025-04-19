// CustomersPage.jsx
import React, { useState } from 'react';
import './CustomersPage.css';
import Topbar from './Topbar';
import Sidebar from './SideBar';
import CustomersTable from './CustomerTable';

const CustomersPage = () => {
  // Mock data for customers table
  const customers = [
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Verified' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Blocked' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Blocked' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Unverified' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Blocked' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Verified' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Verified' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Blocked' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Verified' },
    { id: '4753528', name: 'Oladapo Koiki', phone: '08023587768', email: 'ola-k@gmail.com', dateCreated: '03/03/2025', status: 'Verified' },
  ];

  return (
    <div className="customers-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-container">
          <div className="customers-header">
            <h2>All customers</h2>
            <button className="add-customer-btn">+</button>
          </div>
          <CustomersTable customers={customers} />
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;