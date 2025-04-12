import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const sidebarItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'customers', name: 'Customers', icon: '👥' },
    { id: 'shipments', name: 'Shipments', icon: '📦' },
    { id: 'quote', name: 'Quote Request', icon: '💬' },
    { id: 'tracking', name: 'Tracking Mgt.', icon: '🔍' },
    { id: 'purchase', name: 'Purchase Orders', icon: '🛒' },
    { id: 'transaction', name: 'Transaction', icon: '💰' },
    { id: 'support', name: 'Support Ticket', icon: '🎫' },
    { id: 'audit', name: 'Audit Mgt.', icon: '📝' },
    { id: 'user', name: 'User Mgt.', icon: '👤' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
    { id: 'logout', name: 'Logout', icon: '🚪' }
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
                <span className="icon">{item.icon}</span>
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
