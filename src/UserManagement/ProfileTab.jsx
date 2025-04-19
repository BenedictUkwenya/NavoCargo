import React, { useState } from 'react';
import './UserManagement.css';

const ProfileTab = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    role: '',
    jobTitle: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call here
  };

  return (
    <div className="profile-tab">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter here" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone number</label>
            <input 
              type="text" 
              name="phoneNumber" 
              placeholder="Enter here" 
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter here" 
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <div className="select-wrapper">
              <select 
                name="role" 
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="dataAnalyst">Data Analyst</option>
              </select>
              <div className="select-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>Job Title</label>
            <div className="select-wrapper">
              <select 
                name="jobTitle" 
                value={formData.jobTitle}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
                <option value="analyst">Analyst</option>
              </select>
              <div className="select-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="password-input-wrapper">
              <input 
                type="password" 
                name="password" 
                placeholder="Enter here" 
                value={formData.password}
                onChange={handleChange}
              />
              <div className="password-toggle">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileTab;

// src/pages/UserManagement/components/UsersTab.jsx
