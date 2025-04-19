// CustomerDetailPage.jsx
import React, { useState } from 'react';
import './CustomerDetailPage.css';
import Topbar from './Topbar';
import Sidebar from './SideBar';

const CustomerDetailPage = () => {
  const [activeTab, setActiveTab] = useState('Personal Details');
  
  // Sample customer data
  const customer = {
    name: 'Oladapo Koiki',
    image: '/userprofile.png',
    contact: {
      phoneNGN: '+234 802 938 6768',
      phoneUK: '+44 079 7631 7010',
      email: 'okoiki@gmail.com',
      gender: 'Male'
    },
    addresses: {
      nigeria: {
        country: 'Nigeria',
        state: 'Lagos',
        city: 'Ebute-Meta',
        street: 'Ojo-Giwa St.',
        apartment: '',
        postalCode: '101211',
        status: 'Active'
      },
      uk: {
        country: 'United Kingdom',
        state: 'London',
        city: 'North Barrow',
        street: 'Cambridge Road',
        apartment: '',
        postalCode: 'BA22 7GU',
        status: 'Active'
      }
    }
  };

return (
    <div className="customer-detail-page">
        <Sidebar />
        <div className="main-content">
            <Topbar />
            <div className="content-container">
                <div className="breadcrumb">
                    <span>All customers</span> / <span>{customer.name}</span>
                </div>

                <div className="customer-profile">
                    <div className="profile-header">
                        <div className="profile-image" style={{ float: 'left', marginRight: '20px' }}>
                            <img src={customer.image} alt={customer.name} />
                        </div>
                        <h1 className="customer-name">{customer.name}</h1>
                    </div>

                    <div className="profile-tabs">
                        <ul>
                            <li 
                                className={activeTab === 'Personal Details' ? 'active' : ''}
                                onClick={() => setActiveTab('Personal Details')}
                            >
                                Personal Details
                            </li>
                            <li 
                                className={activeTab === 'Wallet Balance' ? 'active' : ''}
                                onClick={() => setActiveTab('Wallet Balance')}
                            >
                                Wallet Balance
                            </li>
                            <li 
                                className={activeTab === 'Shipments' ? 'active' : ''}
                                onClick={() => setActiveTab('Shipments')}
                            >
                                Shipments
                            </li>
                            <li 
                                className={activeTab === 'Referral' ? 'active' : ''}
                                onClick={() => setActiveTab('Referral')}
                            >
                                Referral
                            </li>
                        </ul>
                    </div>

                    <div className="profile-content">
                        {activeTab === 'Personal Details' && (
                            <div className="personal-details">
                                <div className="contact-info">
                                    <div className="info-group">
                                        <h3>Phone Number (NGN)</h3>
                                        <p>{customer.contact.phoneNGN}</p>
                                    </div>
                                    <div className="info-group">
                                        <h3>Phone Number (UK)</h3>
                                        <p>{customer.contact.phoneUK}</p>
                                    </div>
                                    <div className="info-group">
                                        <h3>Email</h3>
                                        <p>{customer.contact.email}</p>
                                    </div>
                                    <div className="info-group">
                                        <h3>Gender</h3>
                                        <p>{customer.contact.gender}</p>
                                    </div>
                                </div>

                                <div className="delivery-addresses">
                                    <h2>Delivery Address</h2>
                                    
                                    <div className="addresses-container">
                                        <div className="address-column">
                                            <h3>{customer.addresses.nigeria.country}</h3>
                                            <ul>
                                                <li>State: {customer.addresses.nigeria.state}</li>
                                                <li>City: {customer.addresses.nigeria.city}</li>
                                                <li>Street Name: {customer.addresses.nigeria.street}</li>
                                                <li>Apartment/Building (Optional): {customer.addresses.nigeria.apartment}</li>
                                                <li>Postal Code (Optional): {customer.addresses.nigeria.postalCode}</li>
                                                <li>Status: <span className="status active">{customer.addresses.nigeria.status}</span></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="address-column">
                                            <h3>{customer.addresses.uk.country}</h3>
                                            <ul>
                                                <li>State: {customer.addresses.uk.state}</li>
                                                <li>City: {customer.addresses.uk.city}</li>
                                                <li>Street Name: {customer.addresses.uk.street}</li>
                                                <li>Apartment/Building (Optional): {customer.addresses.uk.apartment}</li>
                                                <li>Postal Code (Optional): {customer.addresses.uk.postalCode}</li>
                                                <li>Status: <span className="status active">{customer.addresses.uk.status}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === 'Wallet Balance' && (
                            <div className="wallet-balance">
                                <p>omoooo.</p>
                            </div>
                        )}
                        
                        {activeTab === 'Shipments' && (
                            <div className="shipments">
                                <p>omooooooo.</p>
                            </div>
                        )}
                        
                        {activeTab === 'Referral' && (
                            <div className="referral">
                                <p>omoooooooo.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default CustomerDetailPage;