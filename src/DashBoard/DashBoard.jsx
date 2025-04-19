import React from 'react';
import './Dashboard.css';
import Sidebar from '../Customer/SideBar';
import Topbar from '../Customer/Topbar';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar />
        <div className="dashboard-main">
          <div className="welcome-section">
            <h1>Welcome, Oladapo</h1>
          </div>
          
          <div className="stats-container">
            <div className="stat-card shipments">
              <div className="stat-icon">
                <img src="/total-shipment.png" alt="Shipments" style={{ width: '39px', height: '39px' }} />
              </div>
              <div className="stat-info">
                <p className="stat-title">Total Shipments</p>
                <div className="stat-percentage">
                  <span className="percentage">+15%</span>
                </div>
                <h2 className="stat-value">15</h2>
              </div>
            </div>
            
            <div className="stat-card customers">
              <div className="stat-icon">
                <img src="/customers.png" alt="Customers" style={{ width: '39px', height: '39px' }} />
              </div>
              <div className="stat-info">
                <p className="stat-title">Total Customers</p>
                <div className="stat-percentage">
                  <span className="percentage">+16%</span>
                </div>
                <h2 className="stat-value">25</h2>
              </div>
            </div>
            
            <div className="stat-card completed">
              <div className="stat-icon">
                <img src="/completedShipment.png" alt="Completed" style={{ width: '39px', height: '39px' }} />
              </div>
              <div className="stat-info">
                <p className="stat-title">Completed Shipments</p>
                <div className="stat-percentage">
                  <span className="percentage">+15%</span>
                </div>
                <h2 className="stat-value">50</h2>
              </div>
            </div>
            
            <div className="stat-card transaction">
              <div className="stat-currency">
                <span className="currency ngn">NGN</span>
                <span className="currency gbp">GBP</span>
              </div>
              <div className="stat-info">
                <p className="stat-title">Total Transaction</p>
                <h2 className="stat-value">₦2,050,000.00</h2>
              </div>
            </div>
          </div>
          
          <div className="recent-shipments-shop-container">
            <div className="recent-shipments">
              <div className="section-header">
                <h2>Recent Shipment Transaction</h2>
                <a href="#" className="see-all">See all</a>
              </div>
              
              <div className="tabs">
                <div className="tab active">All</div>
                <div className="tab">Pending</div>
                <div className="tab">Failed</div>
                <div className="tab">Completed</div>
              </div>
              
              <div className="shipment-list">
                <div className="shipment-item">
                  <div className="shipment-icon pending">
                    <span className="arrow-icon">↗</span>
                  </div>
                  <div className="shipment-info">
                    <h3>Shipment to the UK</h3>
                    <p className="shipment-id">ID:687326R4237506</p>
                  </div>
                  <div className="shipment-date">
                    <p>13th Feb, 2024</p>
                    <p>4:45PM</p>
                  </div>
                  <div className="shipment-amount">
                    <h3>£61.74</h3>
                  </div>
                </div>
                
                <div className="shipment-item">
                  <div className="shipment-icon completed">
                    <span className="check-icon">✓</span>
                  </div>
                  <div className="shipment-info">
                    <h3>Shipment to the UK</h3>
                    <p className="shipment-id">ID:687326R4237506</p>
                  </div>
                  <div className="shipment-date">
                    <p>13th Feb, 2024</p>
                    <p>4:45PM</p>
                  </div>
                  <div className="shipment-amount">
                    <h3>₦121,087.50</h3>
                  </div>
                </div>
                
                <div className="shipment-item">
                  <div className="shipment-icon failed">
                    <span className="minus-icon">−</span>
                  </div>
                  <div className="shipment-info">
                    <h3>Shipment to the UK</h3>
                    <p className="shipment-id">ID:687326R4237506</p>
                  </div>
                  <div className="shipment-date">
                    <p>13th Feb, 2024</p>
                    <p>4:45PM</p>
                  </div>
                  <div className="shipment-amount">
                    <h3>£61.74</h3>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="shop-request">
              <div className="shop-icon">
                <img src="/SHOP4ME.png" alt="Shop" style={{ width: '39px', height: '39px' }} />
              </div>
              <div className="shop-info">
                <h3>Total Shop4me Request</h3>
                <h2>50</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;