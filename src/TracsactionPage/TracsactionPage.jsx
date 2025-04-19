// TransactionPage.jsx
import React, { useState } from 'react';
import './TransactionPage.css';
import Sidebar from '../Customer/SideBar';// Adjust path as needed
import Topbar from '../Customer/TopBar'; // Adjust path as needed
import { FiEye } from 'react-icons/fi'; // For eye icon

const TransactionPage = () => {
  // Sample transaction data based on the image
  const transactionsData = [
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shipment', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Pending', remark: 'Payment for shipment to Nigeria' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shop4me', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Successful', remark: 'Payment for shop4me service' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Airtime', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Pending', remark: 'Airtime recharge' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Data', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Failed', remark: 'Data subscription' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shipment', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Successful', remark: 'Payment for shipment to Nigeria' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shipment', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Failed', remark: 'Payment for shipment to Nigeria' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shop4me', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Successful', remark: 'Payment for shop4me service' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shop4me', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Pending', remark: 'Payment for shop4me service' },
    { id: '4t2783496ghewh9', name: 'Oladapo Koiki', category: 'Shipment', amount: '₦2,050,000', date: '02/02/2025', type: 'Debit', status: 'Failed', remark: 'Payment for shipment to Nigeria' },
  ];

  // State for current filter
  const [currentFilter, setCurrentFilter] = useState('All');
  // State for date filters
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for selected transaction
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Filter transactions based on selected filter
  const filteredTransactions = transactionsData.filter(transaction => {
    if (currentFilter === 'All') return true;
    return transaction.status === currentFilter;
  });

  // Function to get appropriate CSS class for status
  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Successful': return 'status-successful';
      case 'Failed': return 'status-failed';
      default: return '';
    }
  };

  // Handle tab change
  const handleTabChange = (filter) => {
    setCurrentFilter(filter);
  };

  // Open transaction details modal
  const openTransactionDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  // Close transaction details modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <div className="transaction-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="transaction-container">
          <div className="transaction-header">
            <h1>Transaction</h1>
            <div className="action-row">
              <div className="date-filters">
                <div className="date-input-container">
                  <input 
                    type="text" 
                    placeholder="Date from" 
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                  />
                  <span className="calendar-icon">📅</span>
                </div>
                <div className="date-input-container">
                  <input 
                    type="text" 
                    placeholder="Date to" 
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                  />
                  <span className="calendar-icon">📅</span>
                </div>
              </div>
              <div className="export-actions">
                <button className="export-btn pdf-btn">PDF <span>↓</span></button>
                <button className="export-btn csv-btn">CSV <span>↓</span></button>
                <button className="filter-btn">
                  <span className="filter-icon">≡</span>
                </button>
                <div className="search-container">
                  <input 
                    type="text" 
                    placeholder="Search by category, transaction type, status..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="tab-filters">
              <button 
                className={`tab-btn ${currentFilter === 'All' ? 'active' : ''}`}
                onClick={() => handleTabChange('All')}
              >
                All
              </button>
              <button 
                className={`tab-btn ${currentFilter === 'Pending' ? 'active' : ''}`}
                onClick={() => handleTabChange('Pending')}
              >
                Pending
              </button>
              <button 
                className={`tab-btn ${currentFilter === 'Successful' ? 'active' : ''}`}
                onClick={() => handleTabChange('Successful')}
              >
                Successful
              </button>
              <button 
                className={`tab-btn ${currentFilter === 'Failed' ? 'active' : ''}`}
                onClick={() => handleTabChange('Failed')}
              >
                Failed
              </button>
            </div>
          </div>

          <div className="transaction-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Transaction ID</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.name}</td>
                    <td>{transaction.id}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.type}</td>
                    <td>
                      <span className={`status-badge ${getStatusClass(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="view-btn"
                        onClick={() => openTransactionDetails(transaction)}
                      >
                        <FiEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <div className="pagination-info">
              Showing 1-09 of 78
            </div>
            <div className="pagination-controls">
              <button className="pagination-btn prev">
                &lt;
              </button>
              <button className="pagination-btn next">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {isModalOpen && selectedTransaction && (
        <div className="modal-overlay">
          <div className="transaction-modal">
            <div className="modal-header">
              <div>
                <p>TRANSFER</p>
                <h2>{selectedTransaction.amount}.43</h2>
                <p>Transaction ID: TRWD-TR0005764975{Math.floor(Math.random() * 10000)}</p>
              </div>
              <div className="modal-actions">
                <div className={`status-circle ${getStatusClass(selectedTransaction.status)}`}></div>
                <button className="close-btn" onClick={closeModal}>✕</button>
              </div>
            </div>
            
            <div className="modal-content">
              <div className="detail-row">
                <span className="detail-label">Sender</span>
                <span className="detail-value">Payout</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Type</span>
                <span className={`detail-value ${selectedTransaction.type === 'Debit' ? 'debit-value' : ''}`}>
                  {selectedTransaction.type}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Channel</span>
                <span className="detail-value">Deposit</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status</span>
                <span className={`detail-value ${getStatusClass(selectedTransaction.status)}`}>
                  {selectedTransaction.status}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Time stamp</span>
                <span className="detail-value">14th Feb, 2025, 8:00 PM</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Category</span>
                <span className="detail-value">{selectedTransaction.category}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Remark</span>
                <span className="detail-value">{selectedTransaction.remark}</span>
              </div>
            </div>
            
            <div className="modal-footer">
              <button className="download-btn">
                Download PDF <span>↓</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;