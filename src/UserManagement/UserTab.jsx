import React, { useState } from 'react';
import './UserManagement.css';

const UsersTab = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const users = [
    { id: 1, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Active' },
    { id: 2, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Inactive' },
    { id: 3, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Inactive' },
    { id: 4, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Active' },
    { id: 5, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Inactive' },
    { id: 6, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Active' },
    { id: 7, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Active' },
    { id: 8, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Active' },
    { id: 9, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Inactive' },
    { id: 10, name: 'Oladapo Koiki', email: 'khalid@loxfordtrading.com', role: 'Data Analysts', status: 'Inactive' }
  ];

  const toggleDropdown = (userId) => {
    setDropdownVisible(dropdownVisible === userId ? null : userId);
  };

  return (
    <div className="users-tab">
      <div className="users-header">
        <button className="add-new-button">
          <span className="plus-icon">+</span>
          Add New
        </button>
      </div>
      <div className="users-table">
        <div className="table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Role</div>
          <div className="table-cell">Status</div>
          <div className="table-cell actions-cell">Actions</div>
        </div>
        {users.map(user => (
          <div key={user.id} className="table-row">
            <div className="table-cell">{user.name}</div>
            <div className="table-cell">{user.email}</div>
            <div className="table-cell">{user.role}</div>
            <div className="table-cell">
              <span className={`status-badge ${user.status.toLowerCase()}`}>
                {user.status}
              </span>
            </div>
            <div className="table-cell actions-cell">
              <button 
                className="action-button" 
                onClick={() => toggleDropdown(user.id)}
              >
                Actions
              </button>
              {dropdownVisible === user.id && (
                <div className="dropdown-menu">
                  <div className="dropdown-item">View</div>
                  <div className="dropdown-item">Edit</div>
                  <div className="dropdown-item">Add Permission</div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersTab;
