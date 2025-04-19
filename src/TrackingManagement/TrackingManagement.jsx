// src/pages/TrackingManagement/TrackingManagement.jsx
import React, { useState } from 'react';
import './TrackingManagement.css';
import Topbar from '../Customer/Topbar';
import Sidebar from '../Customer/SideBar';

const TrackingManagement = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [shipments, setShipments] = useState([
    { 
      id: 1, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order submitted'
    },
    { 
      id: 2, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order Verified'
    },
    { 
      id: 3, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order submitted'
    },
    { 
      id: 4, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order Verified'
    },
    { 
      id: 5, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order submitted'
    },
    { 
      id: 6, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order Verified'
    },
    { 
      id: 7, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order submitted'
    },
    { 
      id: 8, 
      shipmentId: '476328', 
      trackingId: 'bjkolki@gmail.com', 
      orderDate: '13/02/2025', 
      deliveryTimeline: '4 Weeks', 
      deliveryType: 'Pick up', 
      status: 'Order Verified'
    }
  ]);

  const statusOptions = [
    'Order submitted',
    'Order Paid successfully',
    'Order Verified',
    'Order Packed',
    'Awaiting shipment',
    'Order shipped',
    'Flight/sea departure',
    'Package arrived at station',
    'Custom clearance',
    'Arrive at the receiving hub center',
    'Order delivered'
  ];

  const toggleDropdown = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };

  const updateStatus = (id, newStatus) => {
    setShipments(
      shipments.map(shipment =>
        shipment.id === id ? { ...shipment, status: newStatus } : shipment
      )
    );
    setExpandedRow(null);
  };

  return (
    <div className="tracking-management-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-container">
          <div className="tm-header">
            <h2>Tracking Management</h2>
            <div className="tm-filter-controls">
              <button className="tm-filter-button">
                <i className="tm-filter-icon"></i>
              </button>
              <div className="tm-search-container">
                <input
                  type="text"
                  placeholder="Search by name, location, date..."
                  className="tm-search-input"
                />
                <button className="tm-clear-button">×</button>
              </div>
            </div>
          </div>

          <div className="tm-table-container">
            <table className="tm-table">
              <thead>
                <tr>
                  <th>Shipment ID</th>
                  <th>Tracking ID</th>
                  <th>Order Date</th>
                  <th>Delivery Timeline</th>
                  <th>Delivery Type</th>
                  <th>Status Update</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr key={shipment.id}>
                    <td>{shipment.shipmentId}</td>
                    <td>{shipment.trackingId}</td>
                    <td>{shipment.orderDate}</td>
                    <td>{shipment.deliveryTimeline}</td>
                    <td>{shipment.deliveryType}</td>
                    <td>
                      <div className="tm-status-container">
                        <div
                          className="tm-status-display"
                          onClick={() => toggleDropdown(shipment.id)}
                        >
                          {shipment.status}
                          <span
                            className={`tm-dropdown-arrow ${
                              expandedRow === shipment.id
                                ? 'tm-arrow-up'
                                : 'tm-arrow-down'
                            }`}
                          ></span>
                        </div>
                        {expandedRow === shipment.id && (
                          <div className="tm-status-dropdown">
                            {statusOptions.map((status, index) => (
                              <div
                                key={index}
                                className="tm-status-option"
                                onClick={() => updateStatus(shipment.id, status)}
                              >
                                {status}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="table-footer">
              <div className="pagination-info">Showing 1-09 of 78</div>
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
        </div>
      </div>
    </div>
  );
};

export default TrackingManagement;