// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './LoginPage/Login';
import Dashboard from './DashBoard/DashBoard';
import CustomersPage from './Customer/PageContent';
import CustomerDetailPage from './Customer/CustomerDetailsPage';
import QuoteRequestPage from './QuoteRequestPage/QuoteRequestPage';
import TrackingManagement from './TrackingManagement/TrackingManagement';
import PurchaseOrdersPage from './Purchase Orders/PurchaseOrder';
import TransactionPage from './TracsactionPage/TracsactionPage';
import SupportTicketPage from './SupportTickket/SupportTicket';
import AuditManagement from './Audit Managent/Audit';
import Settings from './Settings/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/customers' element={<CustomersPage />} />
        <Route path='/customer-details' element={<CustomerDetailPage />} />
        <Route path='/quote' element={<QuoteRequestPage />} />
        <Route path='/tracking' element={<TrackingManagement />} />
        <Route path='/purchase' element={<PurchaseOrdersPage />} />
        <Route path='/transaction' element={<TransactionPage />} />
        <Route path='/support' element={<SupportTicketPage />} />
        <Route path='/audit' element={<AuditManagement />} />
        <Route path='/settings' element={<Settings />} />
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;