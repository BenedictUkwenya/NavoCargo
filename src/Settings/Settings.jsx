// Settings.jsx
import React from 'react';
import './Settings.css';
import Sidebar from '../Customer/SideBar';
import Topbar from '../Customer/Topbar';

const Settings = () => {
  // Define the settings cards with their specific colors
  const settingsCards = [
    {
      id: 1,
      title: 'Manage page',
      iconPath: '/icons/webpage-icon.svg', // Replace with your actual icon path
      bgColor: '#f0f5ff',
      textColor: '#0033a0',
      hasMoreOptions: true
    },
    {
      id: 2,
      title: 'FAQs',
      iconPath: '/icons/faq-icon.svg',
      bgColor: '#fff6f0',
      textColor: '#ff5b00',
      hasMoreOptions: false
    },
    {
      id: 3,
      title: 'Manage Referrals',
      iconPath: '/icons/gift-icon.svg',
      bgColor: '#f0f5ff',
      textColor: '#0033a0',
      hasMoreOptions: false
    },
    {
      id: 4,
      title: 'About Us',
      iconPath: '/icons/info-icon.svg',
      bgColor: '#fff6f0',
      textColor: '#ff5b00',
      hasMoreOptions: false
    },
    {
      id: 5,
      title: 'Footer',
      iconPath: '/icons/footer-icon.svg',
      bgColor: '#f0f5ff',
      textColor: '#0033a0',
      hasMoreOptions: false
    },
    {
      id: 6,
      title: 'Social icons links',
      iconPath: '/icons/link-icon.svg',
      bgColor: '#fff6f0',
      textColor: '#ff5b00',
      hasMoreOptions: false
    },
    {
      id: 7,
      title: 'Testimonial',
      iconPath: '/icons/testimonial-icon.svg',
      bgColor: '#f0f5ff',
      textColor: '#0033a0',
      hasMoreOptions: false
    },
    {
      id: 8,
      title: 'Reviews/Comment',
      iconPath: '/icons/comment-icon.svg',
      bgColor: '#fff6f0',
      textColor: '#ff5b00',
      hasMoreOptions: false
    },
    {
      id: 9,
      title: 'Policy/ Terms & Condition',
      iconPath: '/icons/policy-icon.svg',
      bgColor: '#f0f5ff',
      textColor: '#0033a0',
      hasMoreOptions: false
    },
    {
      id: 10,
      title: 'Contact Us',
      iconPath: '/icons/contact-icon.svg',
      bgColor: '#fff6f0',
      textColor: '#ff5b00',
      hasMoreOptions: false
    }
  ];

  // Placeholder SVG icons if you don't have the actual icons yet
  const getPlaceholderIcon = (id, color) => {
    // Custom SVG content based on the card type
    switch(id) {
      case 1: // Manage page
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2"/>
            <line x1="2" y1="9" x2="22" y2="9" stroke={color} strokeWidth="2"/>
            <line x1="6" y1="14" x2="18" y2="14" stroke={color} strokeWidth="2"/>
            <line x1="6" y1="17" x2="18" y2="17" stroke={color} strokeWidth="2"/>
          </svg>
        );
      case 2: // FAQs
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16M8 16H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 3: // Manage Referrals
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12L12 6L4 12M20 12L12 18M20 12V18M4 12L12 18M4 12V18M12 6V18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 4: // About Us
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
            <path d="M12 16V11" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="8" r="1" fill={color}/>
          </svg>
        );
      case 5: // Footer
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2"/>
            <line x1="2" y1="18" x2="22" y2="18" stroke={color} strokeWidth="2"/>
          </svg>
        );
      case 6: // Social icons links
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13C10 13 14 17 16 17C18 17 22 13 22 13M2 13C2 13 6 7 12 7C18 7 22 13 22 13" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 7: // Testimonial
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8.97C3 8.42772 3.42772 8 3.97 8H20.03C20.5723 8 21 8.42772 21 8.97V17.01C21 17.5523 20.5523 18 20.01 18H3.99C3.44772 18 3 17.5523 3 17.01V8.97Z" stroke={color} strokeWidth="2"/>
            <path d="M7 13.5C7.27614 13.5 7.5 13.2761 7.5 13C7.5 12.7239 7.27614 12.5 7 12.5C6.72386 12.5 6.5 12.7239 6.5 13C6.5 13.2761 6.72386 13.5 7 13.5Z" fill={color} stroke={color}/>
            <path d="M12 13.5C12.2761 13.5 12.5 13.2761 12.5 13C12.5 12.7239 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.7239 11.5 13C11.5 13.2761 11.7239 13.5 12 13.5Z" fill={color} stroke={color}/>
            <path d="M17 13.5C17.2761 13.5 17.5 13.2761 17.5 13C17.5 12.7239 17.2761 12.5 17 12.5C16.7239 12.5 16.5 12.7239 16.5 13C16.5 13.2761 16.7239 13.5 17 13.5Z" fill={color} stroke={color}/>
          </svg>
        );
      case 8: // Reviews/Comment
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10C20 14.4183 16.4183 18 12 18C10.5937 18 9.27223 17.6372 8.12398 17L4 18L5 13.8371C4.36065 12.684 4 11.3778 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 9H14M10 13H14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 9: // Policy/Terms
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2H18C19.1046 2 20 2.89543 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2Z" stroke={color} strokeWidth="2"/>
            <path d="M8 6H16M8 10H16M8 14H12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 10: // Contact Us
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 10.999H21C21.5523 10.999 22 11.4467 22 11.999V16.999C22 17.5513 21.5523 17.999 21 17.999H20M20 10.999V6.99902C20 6.44674 19.5523 5.99902 19 5.99902H5C4.44772 5.99902 4 6.44674 4 6.99902V16.999C4 17.5513 4.44772 17.999 5 17.999H19C19.5523 17.999 20 17.5513 20 16.999V10.999" stroke={color} strokeWidth="2"/>
            <path d="M16 11.999H17C17.5523 11.999 18 12.4467 18 12.999V15.999C18 16.5513 17.5523 16.999 17 16.999H16" stroke={color} strokeWidth="2"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
          </svg>
        );
    }
  };

  return (
    <div className="settings-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="settings-content">
          <h1 className="settings-title">Settings</h1>
          
          <div className="settings-grid">
            {settingsCards.map((card) => (
              <div
                key={card.id}
                className="settings-card"
                style={{ backgroundColor: card.bgColor }}
              >
                <div className="card-content">
                  <h3 style={{ color: card.textColor }}>{card.title}</h3>
                  
                  {card.hasMoreOptions && (
                    <button className="more-options-btn">
                      <span className="dots">⋮</span>
                    </button>
                  )}
                  
                  <div className="icon-container">
                    <div className="icon" style={{ color: card.textColor }}>
                      {getPlaceholderIcon(card.id, card.textColor)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;