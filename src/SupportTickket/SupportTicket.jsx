// SupportTicketPage.jsx
import React, { useState } from 'react';
import './SupportTicketPage.css';
import Sidebar from '../Customer/SideBar';
import Topbar from '../Customer/Topbar';
import { FiEye } from 'react-icons/fi'; // For eye icon

const SupportTicketPage = () => {
  // Sample ticket data based on the image
  const ticketsData = [
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Low', status: 'Pending', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Low', status: 'Answered', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Medium', status: 'Closed', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'High', status: 'Answered', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Low', status: 'Pending', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'High', status: 'Answered', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Medium', status: 'Answered', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Medium', status: 'Answered', description: 'The app crashes when I try to make a payment.' },
    { id: '78RHYFW93FIFJ', name: 'Oladapo Koiki', email: 'okoiki@gmail.com', title: 'Crashing app', priority: 'Low', status: 'Closed', description: 'The app crashes when I try to make a payment.' },
  ];

  // State for current filter
  const [currentFilter, setCurrentFilter] = useState('All');
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for selected ticket
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Filter tickets based on selected filter
  const filteredTickets = ticketsData.filter(ticket => {
    if (currentFilter === 'All') return true;
    return ticket.status === currentFilter;
  });

  // Function to get appropriate CSS class for status
  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'Answered': return 'status-answered';
      case 'Closed': return 'status-closed';
      default: return '';
    }
  };

  // Handle tab change
  const handleTabChange = (filter) => {
    setCurrentFilter(filter);
  };

  // Open ticket details modal
  const openTicketDetails = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  // Close ticket details modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTicket(null);
  };

  // Function to get appropriate priority class
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'Low': return 'priority-low';
      case 'Medium': return 'priority-medium';
      case 'High': return 'priority-high';
      default: return '';
    }
  };

  return (
    <div className="support-ticket-page">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="support-ticket-container">
          <div className="support-ticket-header">
            <h1>Support Ticket</h1>
            <div className="action-row">
              <div className="filter-actions">
                <button className="filter-btn">
                  <span className="filter-icon">≡</span>
                </button>
                <div className="search-container">
                  <input 
                    type="text" 
                    placeholder="Search by name, status, priority..." 
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
                className={`tab-btn ${currentFilter === 'Closed' ? 'active' : ''}`}
                onClick={() => handleTabChange('Closed')}
              >
                Closed
              </button>
            </div>
          </div>

          <div className="support-ticket-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Ticket ID</th>
                  <th>Ticket Title</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket, index) => (
                  <tr key={index}>
                    <td>{ticket.name}</td>
                    <td>{ticket.email}</td>
                    <td>{ticket.id}</td>
                    <td>{ticket.title}</td>
                    <td>
                      <span className={`priority-badge ${getPriorityClass(ticket.priority)}`}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td>
                      <span className={`status-badge ${getStatusClass(ticket.status)}`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="view-btn"
                        onClick={() => openTicketDetails(ticket)}
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

      {/* Ticket Details Modal */}
      {isModalOpen && selectedTicket && (
        <div className="modal-overlay">
          <div className="ticket-modal">
            <div className="modal-header">
              <div>
                <p className={`ticket-status ${getStatusClass(selectedTicket.status)}`}>
                  TICKET - {selectedTicket.status.toUpperCase()}
                </p>
                <h2>{selectedTicket.title}</h2>
                <p>Ticket ID: {selectedTicket.id}</p>
              </div>
              <div className="modal-actions">
                <div className={`status-circle ${getStatusClass(selectedTicket.status)}`}></div>
                <button className="close-btn" onClick={closeModal}>✕</button>
              </div>
            </div>
            
            <div className="modal-content">
              <div className="detail-row">
                <span className="detail-label">Name</span>
                <span className="detail-value">{selectedTicket.name}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Email</span>
                <span className="detail-value">{selectedTicket.email}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Status</span>
                <span className={`detail-value ${getStatusClass(selectedTicket.status)}`}>
                  {selectedTicket.status}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Priority</span>
                <span className={`detail-value ${getPriorityClass(selectedTicket.priority)}`}>
                  {selectedTicket.priority}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Description</span>
                <span className="detail-value description-value">{selectedTicket.description}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Created At</span>
                <span className="detail-value">14th Feb, 2025, 8:00 PM</span>
              </div>
            </div>
            
            <div className="modal-footer">
              <div className="footer-action-buttons">
                <button className="resolve-btn">Resolve Ticket</button>
                <button className="reply-btn">Reply</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportTicketPage;