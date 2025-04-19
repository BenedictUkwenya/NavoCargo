// src/pages/PurchaseOrders/PurchaseOrdersPage.jsx
import React, { useState } from 'react';

import PurchaseOrdersTable from './PurchaseOrderTable';
import './PurchaseOrderPage.css';
import Topbar from '../Customer/Topbar';
import Sidebar from '../Customer/SideBar';

const PurchaseOrdersPage = () => {
  // Sample data for the table
  const [orders, setOrders] = useState([
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'Nigeria', category: 'Groceries', quantity: 50, status: 'Request' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'United Kingdom', category: 'Groceries', quantity: 50, status: 'Delivered' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'Nigeria', category: 'Groceries', quantity: 50, status: 'Request' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'United Kingdom', category: 'Groceries', quantity: 50, status: 'Request' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'Nigeria', category: 'Groceries', quantity: 50, status: 'Request' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'United Kingdom', category: 'Groceries', quantity: 50, status: 'Parcel Packed' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'Nigeria', category: 'Groceries', quantity: 50, status: 'Delivered' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'United Kingdom', category: 'Groceries', quantity: 50, status: 'Delivered' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'United Kingdom', category: 'Groceries', quantity: 50, status: 'Delivered' },
    { userId: '476328', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', phone: '08029386768', country: 'Nigeria', category: 'Groceries', quantity: 50, status: 'Delivered' },
  ]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="pu-content-container">
       
        <Topbar title="Order for Purchase" />
        <main className="pu-main-content">
          <div className="purchase-orders-header">
            <h1>All Purchase Orders</h1>
            <div className="header-actions">
              <button className="sort-button">
                <i className="sort-icon"></i>
              </button>
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Search by vendor, location date..." 
                  className="search-input" 
                />
                <button className="clear-search">×</button>
              </div>
            </div>
          </div>
          <PurchaseOrdersTable orders={orders} />
          <div className="pagination">
            <span className="page-info">Showing 1-09 of 78</span>
            <div className="page-controls">
              <button className="page-prev">
                <i className="prev-icon"></i>
              </button>
              <button className="page-next">
                <i className="next-icon"></i>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PurchaseOrdersPage;