// src/pages/UserManagement/UserManagement.jsx
import React, { useState } from 'react';
import Sidebar from '../Customer/SideBar';
import Topbar from '../Customer/Topbar';
import ProfileTab from './ProfileTab';
import UsersTab from './UserTab';
import RolesTab from './RoleTab';
import PermissionsTab from './PermissionTab';
import './UserManagement.css';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'users':
        return <UsersTab />;
      case 'roles':
        return <RolesTab />;
      case 'permissions':
        return <PermissionsTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="user-management-container">
      <Sidebar />
      <div className="content-wrapper">
        <Topbar />
        <div className="user-management-content">
          <h1>User Management</h1>
          <div className="tabs-container">
            <div className="tabs-header">
              <div 
                className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </div>
              <div 
                className={`tab ${activeTab === 'users' ? 'active' : ''}`}
                onClick={() => setActiveTab('users')}
              >
                Users
              </div>
              <div 
                className={`tab ${activeTab === 'roles' ? 'active' : ''}`}
                onClick={() => setActiveTab('roles')}
              >
                Roles
              </div>
              <div 
                className={`tab ${activeTab === 'permissions' ? 'active' : ''}`}
                onClick={() => setActiveTab('permissions')}
              >
                Permissions
              </div>
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by name, role, etc..."
                className="search-input"
              />
              <span className="clear-search">×</span>
            </div>
          </div>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

// src/pages/UserManagement/components/ProfileTab.jsx

// src/pages/UserManagement/components/RolesTab.jsx

// src/pages/UserManagement/components/PermissionsTab.jsx
