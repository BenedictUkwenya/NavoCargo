import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: 'dashboardicon.png' },
    { id: 'customers', name: 'Customers', icon: 'customers.png' },
    { id: 'shipments', name: 'Shipments', icon: 'shipment-icon.png' },
    { id: 'quote', name: 'Quote Request', icon: 'quote-icon.png' },
    { id: 'tracking', name: 'Tracking Mgt.', icon: 'trackingicon.png' },
    { id: 'purchase', name: 'Purchase Orders', icon: 'purchaseicon.png' },
    { id: 'transaction', name: 'Transaction', icon: 'transactionicon.png' },
    { id: 'support', name: 'Support Ticket', icon: 'support.png' },
    { id: 'audit', name: 'Audit Mgt.', icon: 'usermgt.png' },
    { id: 'user', name: 'User Mgt.', icon: 'usermagg.png' },
    { id: 'settings', name: 'Settings', icon: 'settings.png' },
    { id: 'logout', name: 'Logout', icon: 'logoutIcon.png' }
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="navo-logo.png" alt="Navo+" className="logo" />
      </div>
      <nav className="sidebar-menu">
        <ul>
          {sidebarItems.map(item => (
            <li key={item.id}>
              <NavLink
                to={`/${item.id}`}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <span className="icon">
  {item.icon.endsWith('.png') ? (
    <img src={`/${item.icon}`} alt={item.name} width="20" height="20" />
  ) : (
    item.icon
  )}
</span>

                <span className="text">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
