// AuditManagement.jsx
import React, { useState } from 'react';
import './AuditManagement.css';
import Sidebar from '../Customer/SideBar'; // Adjust path as needed
import Topbar from '../Customer/Topbar';

const AuditManagement = () => {
  const [auditLogs, setAuditLogs] = useState([
    { id: 1, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 2, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 3, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 4, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 5, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 6, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 7, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 8, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 9, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
    { id: 10, name: 'Oladapo Koiki', action: 'Click button', date: '13/02/2025', ip: '192.168.1.1', phone: 'Android', page: 'Shipment tracking' },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(auditLogs.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = auditLogs.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="audit-management-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="audit-content">
          <div className="audit-header">
            <h1>Audit Management</h1>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search by service, location, date..."
                className="search-input"
              />
              <button className="clear-search">×</button>
            </div>
          </div>

          <div className="audit-table">
            <div className="table-header">
              <div className="header-cell">Name</div>
              <div className="header-cell">Action taken</div>
              <div className="header-cell">Date</div>
              <div className="header-cell">Ip Address</div>
              <div className="header-cell">Phone type</div>
              <div className="header-cell">Browser page</div>
            </div>
            
            <div className="table-body">
              {currentItems.map((log) => (
                <div className="table-row" key={log.id}>
                  <div className="table-cell">{log.name}</div>
                  <div className="table-cell">{log.action}</div>
                  <div className="table-cell">{log.date}</div>
                  <div className="table-cell">{log.ip}</div>
                  <div className="table-cell">{log.phone}</div>
                  <div className="table-cell">{log.page}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="pagination">
            <div className="pagination-text">
              Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, auditLogs.length)} of {auditLogs.length}
            </div>
            <div className="pagination-controls">
              <button 
                className={`pagination-button ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              <button 
                className={`pagination-button ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditManagement;