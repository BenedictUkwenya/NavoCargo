// QuoteRequestPage.jsx
import React from 'react';
import './QuoteRequestPage.css';
import Topbar from '../Customer/Topbar';
import Sidebar from '../Customer/SideBar';


const QuoteRequestPage = () => {
  // Sample quote request data
  const quoteRequests = [
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
    { id: '476328', email: 'bjkoiki@gmail.com', service: 'Send', locationFrom: 'United Kingdom', locationTo: 'Nigeria', goodsType: 'General', weight: '350kg', date: '13/02/2025' },
  ];

return (
    <div className="quote-request-page">
        <Sidebar />
        <div className="main-content">
            <Topbar />
            <div className="content-container">
                <div className="quote-header">
                    <h2>All Quote Requests</h2>
                    <div className="filter-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.33333 15H11.6667V13.3333H8.33333V15ZM2.5 5V6.66667H17.5V5H2.5ZM5 10.8333H15V9.16667H5V10.8333Z" fill="#FF6B00"/>
                        </svg>
                    </div>
                    <div className="search-container">
                        <input 
                            type="text" 
                            placeholder="Search by service, location date..." 
                            className="search-input" 
                        />
                        <button className="clear-search">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#999"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="quote-table-container">
                    <table className="quote-table">
                        <thead>
                            <tr>
                                <th>Request ID</th>
                                <th>Email</th>
                                <th>Service</th>
                                <th>Location From</th>
                                <th>Location To</th>
                                <th>Goods Type</th>
                                <th>Weight</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quoteRequests.map((request, index) => (
                                <tr key={index}>
                                    <td>{request.id}</td>
                                    <td>{request.email}</td>
                                    <td>{request.service}</td>
                                    <td>{request.locationFrom}</td>
                                    <td>{request.locationTo}</td>
                                    <td>{request.goodsType}</td>
                                    <td>{request.weight}</td>
                                    <td>{request.date}</td>
                                    <td className="action-buttons">
                                        <button className="action-btn email-btn" width="30px" height="30px">
                                            <img src="email-icon.png" alt="Email" />
                                        </button>
                                        <button className="action-btn message-btn">
                                            <img src="message-icon.png" alt="Message" width="30px" height="30px"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="table-footer">
                        <div className="pagination-info">
                            Showing 1-09 of 78
                        </div>
                        <div className="pagination-controls">
                            <button className="pagination-btn prev">
                                <span>&#8249;</span>
                            </button>
                            <button className="pagination-btn next">
                                <span>&#8250;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default QuoteRequestPage;