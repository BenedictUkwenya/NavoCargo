// Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');
  const [activeSidebar, setActiveSidebar] = useState('Dashboard');

  const handleTabChange = (tab) => setActiveTab(tab);
  const handleLogout = () => navigate('/login');

  const sidebarItems = [
    { icon: '📊', label: 'Dashboard', route: '/dashboard' },
    { icon: '👥', label: 'Customers', route: '/customers' },
    { icon: '📦', label: 'Shipments', route: ''},
    { icon: '📝', label: 'Quote Request', route: '/quote'},
    { icon: '🔄', label: 'Tracking Mgt.', route: '/tracking'},
    { icon: '🛒', label: 'Purchase Orders', route: '/purchase'},
    { icon: '💰', label: 'Transaction' },
    { icon: '🎧', label: 'Support Ticket' },
    { divider: true },
    { icon: '📊', label: 'Audit Mgt.' },
    { icon: '👤', label: 'User Mgt.' },
    { icon: '⚙️', label: 'Settings' },
    { divider: true },
    { icon: '🚪', label: 'Logout', action: handleLogout },
  ];

  const shipmentTabs = ['All', 'Pending', 'Failed', 'Completed'];

  const recentShipments = [
    { status: 'red', arrow: '↗', name: 'Shipment to the UK', id: '687326R4237806', date: '13th Feb, 2024', time: '4:45PM', price: '£61.74' },
    { status: 'green', arrow: '✓', name: 'Shipment to the UK', id: '687326R4237806', date: '13th Feb, 2024', time: '4:45PM', price: '₦121,087.50' },
    { status: 'yellow', arrow: '−', name: 'Shipment to the UK', id: '687326R4237806', date: '13th Feb, 2024', time: '4:45PM', price: '£61.74' },
  ];

  const handleSidebarClick = (item) => {
    if (item.action) return item.action();
    setActiveSidebar(item.label);
    if (item.route) navigate(item.route);
  };

  return (
    <div className="dashboard-wrapper">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">Navo</span>
            <span className="logo-plus">+</span>
          </div>
          <h2 className="header-title">Dashboard</h2>
        </div>
        <div className="header-right">
          <div className="search-container">
            <i className="search-icon">🔍</i>
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="notification">
            <span className="notification-icon">🔔</span>
            <span className="notification-badge">2</span>
          </div>
          <div className="user-profile">
            <div className="avatar">
              <img src="/userprofile.png" alt="User" />
            </div>
            <span className="username">Oladapo</span>
            <i className="dropdown-icon">▼</i>
          </div>
        </div>
      </header>

      <div className="content-wrapper">
        {/* Sidebar */}
        <aside className="sidebar" >
          {sidebarItems.map((item, idx) =>
            item.divider ? (
              <div key={`divider-${idx}`} className="sidebar-divider"></div>
            ) : (
              <div
                key={item.label}
                className={`sidebar-item ${activeSidebar === item.label ? 'active' : ''}`}
                onClick={() => handleSidebarClick(item)} 
              >
                <div className={`sidebar-icon ${activeSidebar === item.label ? 'orange' : ''}`}>
                  {item.icon}
                </div>
                <span >{item.label}</span>
              </div>
            )
          )}
        </aside>

        {/* Main Dashboard Content */}
        <main className="dashboard-content">
          <div className="welcome-section">
            <h1>Welcome, <span className="username-highlight">Oladapo</span></h1>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stats-card blue-bg">
              <div className="stats-header">
                <div className="stats-icon-container blue"><div className="stats-icon">🚢</div></div>
                <div className="stats-title">Total<br />Shipments</div>
              </div>
              <div className="stats-badge">+15%</div>
              <div className="stats-value blue-text">15</div>
            </div>

            <div className="stats-card orange-bg">
              <div className="stats-header">
                <div className="stats-icon-container orange"><div className="stats-icon">👥</div></div>
                <div className="stats-title" style={{ cursor: 'pointer' }}>Total<br />Customers</div>
              </div>
              <div className="stats-badge">+15%</div>
              <div className="stats-value orange-text">25</div>
            </div>

            <div className="stats-card blue-bg">
              <div className="stats-header">
                <div className="stats-icon-container blue"><div className="stats-icon">✅</div></div>
                <div className="stats-title">Completed<br />Shipments</div>
              </div>
              <div className="stats-badge">+15%</div>
              <div className="stats-value blue-text">50</div>
            </div>

            <div className="stats-card orange-bg">
              <div className="stats-header">
                <div className="stats-icon-container orange"><div className="stats-icon">📄</div></div>
                <div className="currency-toggle">
                  <span className="currency-option active">NGN</span>
                  <span className="currency-option">GBP</span>
                </div>
                <div className="stats-title">Total<br />Transaction</div>
              </div>
              <div className="stats-value orange-text">₦2,050,000.00</div>
            </div>
          </div>

          {/* Recent Shipments Section */}
          <div className="shipments-section">
            <div className="section-header">
              <h2>Recent Shipment Transaction</h2>
              <a href="#" className="see-all">See all</a>
            </div>

            <div className="tabs-container">
              {shipmentTabs.map(tab => (
                <div
                  key={tab}
                  className={`tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>

            <div className="shipment-table">
              {recentShipments.map((shipment, idx) => (
                <div className="shipment-row" key={idx}>
                  <div className={`status-indicator ${shipment.status}`}>{shipment.arrow}</div>
                  <div className="shipment-info">
                    <div className="shipment-name">{shipment.name}</div>
                    <div className="shipment-id">ID:{shipment.id}</div>
                  </div>
                  <div className="shipment-date">
                    <div>{shipment.date}</div>
                    <div>{shipment.time}</div>
                  </div>
                  <div className="shipment-price">{shipment.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shop4Me Section */}
          <div className="shop4me-card">
            <div className="shop-icon-container">
              <div className="shop-icon">🛍️</div>
            </div>
            <div className="shop-content">
              <div className="shop-title">Total<br />Shop4me Request</div>
              <div className="shop-value">50</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
