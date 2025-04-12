// Topbar.jsx
import React from 'react';
import './Topbar.css';


const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
      </div>
      <div className="topbar-right">
        <div className="search-container">
          <img src="search-icon.jpeg" alt="Search" className="search-icon" />
          <input type="text" placeholder="Search" className="search-input" />
        </div>
        <div className="notification-icon">
          <img src="notification-icon.svg" alt="Notifications" />
          <span className="notification-badge"></span>
        </div>
        <div className="user-profile">
          <img src="userprofile.png" alt="User" className="user-avatar" />
          <span className="user-name">Oladapo</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;