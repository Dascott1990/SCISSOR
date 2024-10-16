import React from 'react';

interface SidebarProps {
  isOpen: boolean; // To track if the sidebar is open
  toggleSidebar: () => void; // Function to toggle sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'show' : ''}`}>
      <div className="sidebar-center">
        {/* Close Button */}
        <button className="sidebar-close-btn" onClick={toggleSidebar}>
          <i className="fa-sharp fa-solid fa-xmark fa-xl"></i>
        </button>
        {/* Sidebar Links */}
        <ul className="sidebar-links">
          <li><a className="sidebar-link primary-blue-300" href="#home">My URLs</a></li>
          <li><a className="sidebar-link" href="#features">Features</a></li>
          <li><a className="sidebar-link" href="#pricing">Pricing</a></li>
          <li><a className="sidebar-link" href="#form">Analytics</a></li>
          <li><a className="sidebar-link" href="#questions">FAQs</a></li>
          <li><a className="sidebar-link" href="#">Log in</a></li>
          <li><a className="sidebar-link" href="#">Try for free</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
