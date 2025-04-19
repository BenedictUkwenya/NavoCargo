// src/pages/UserManagement/components/PermissionsTab.jsx
import React, { useState } from 'react';
import './UserManagement.css';

const PermissionsTab = () => {
  const permissionCategories = [
    {
      id: 'onboarding',
      title: 'Onboarding',
      icon: '📝',
      permissions: [
        { id: 'signUp', label: 'Sign Up/Log In', selected: true },
        { id: 'profileUpdate', label: 'Profile Update', selected: false },
        { id: 'passwordReset', label: 'Password Reset', selected: false },
        { id: 'createDeactivate', label: 'Create/Deactivate User', selected: false },
        { id: 'twoFactorAuth1', label: 'Two-Factor Authentication', selected: false },
        { id: 'viewEdit', label: 'View/Edit User Profiles', selected: false },
        { id: 'resetPasswords', label: 'Reset User Passwords', selected: false },
        { id: 'verifyIdentity', label: 'Verify User Identity', selected: false },
        { id: 'twoFactorAuth2', label: 'Two-Factor Authentication', selected: false }
      ]
    },
    {
      id: 'shipments',
      title: 'Shipments',
      icon: '📦',
      permissions: [
        { id: 'viewInvestment', label: 'View Investment Portfolio', selected: false },
        { id: 'buySell', label: 'Buy/Sell Investments', selected: false },
        { id: 'dividend', label: 'Dividend Reinvestment', selected: false },
        { id: 'viewTransHistory', label: 'View Transaction History', selected: false },
        { id: 'addRemove', label: 'Add/Remove Investments', selected: false },
        { id: 'updateInvestInfo', label: 'Update Investment Information', selected: false },
        { id: 'approveDeny', label: 'Approve/Deny Transactions', selected: false }
      ]
    },
    {
      id: 'transactions',
      title: 'Transactions',
      icon: '📄',
      permissions: [
        { id: 'depositFunds', label: 'Deposit Funds', selected: false },
        { id: 'withdrawFunds', label: 'Withdraw Funds', selected: false },
        { id: 'viewTransactionHist', label: 'View Transaction History', selected: false },
        { id: 'viewAllTrans', label: 'View All Transactions', selected: false },
        { id: 'flagSuspicious', label: 'Flag Suspicious Activity', selected: false },
        { id: 'generateReports', label: 'Generate Financial Reports', selected: false }
      ]
    },
    {
      id: 'systemAdmin',
      title: 'System Administration',
      icon: '🔧',
      permissions: [
        { id: 'configureApp', label: 'Configure Web App Settings', selected: false },
        { id: 'monitorPerformance', label: 'Monitor System Performance', selected: false },
        { id: 'backupRestore', label: 'Backup and Restore Data', selected: false },
        { id: 'securityManagement', label: 'Security Management', selected: false }
      ]
    },
    {
      id: 'supportComm',
      title: 'Support and Communication',
      icon: '📞',
      permissions: [
        { id: 'respondQueries', label: 'Respond to User Queries', selected: false },
        { id: 'sendAnnouncements', label: 'Send Announcements', selected: false },
        { id: 'manageTickets', label: 'Manage Support Tickets', selected: false }
      ]
    },
    {
      id: 'contentMgmt',
      title: 'Content Management',
      icon: '📚',
      permissions: [
        { id: 'manageResources', label: 'Manage Educational Resources', selected: false },
        { id: 'updateNews', label: 'Update Investment News', selected: false },
        { id: 'manageAlerts', label: 'Manage Alerts and Notifications', selected: false }
      ]
    },
    {
      id: 'eduResources',
      title: 'Educational Resources',
      icon: '🎓',
      permissions: [
        { id: 'tutorials', label: 'Tutorials and Guides', selected: false },
        { id: 'webinars', label: 'Webinars and Workshops', selected: false },
        { id: 'faqs', label: 'FAQs', selected: false }
      ]
    },
    {
      id: 'alerts',
      title: 'Alerts and Notifications',
      icon: '🔔',
      permissions: [
        { id: 'priceAlerts', label: 'Price Alerts', selected: false },
        { id: 'newsAlerts', label: 'News Alerts', selected: false },
        { id: 'transactionAlerts', label: 'Transaction Alerts', selected: false }
      ]
    }
  ];

  const [permissions, setPermissions] = useState(permissionCategories);

  const handlePermissionChange = (categoryId, permissionId) => {
    setPermissions(prevPermissions => 
      prevPermissions.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            permissions: category.permissions.map(permission => {
              if (permission.id === permissionId) {
                return { ...permission, selected: !permission.selected };
              }
              return permission;
            })
          };
        }
        return category;
      })
    );
  };

  return (
    <div className="permissions-tab">
      <div className="permissions-header">
        <button className="add-new-button">
          <span className="plus-icon">+</span>
          Add New
        </button>
      </div>
      
      <div className="permissions-grid">
        {permissions.map((category, index) => (
          <div key={index} className="permission-category">
            <h3 className="category-title">
              <span className="category-icon">{category.icon}</span>
              {category.title}
            </h3>
            <div className="permission-items">
              {category.permissions.map((permission, idx) => (
                <div key={idx} className="permission-item">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={permission.selected}
                      onChange={() => handlePermissionChange(category.id, permission.id)}
                    />
                    <span className="checkmark"></span>
                    {permission.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermissionsTab;