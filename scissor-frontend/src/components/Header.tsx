import React from 'react';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="home sticky" id="home">
      <div className="nav-center">
        <div className="logo">
          <img className="logo-icon" src="./images/Logo.svg" alt="nav-logo" />
        </div>
        <span 
          className="logo-btn sidebar-open-btn" 
          onClick={toggleSidebar} 
          aria-label="Toggle sidebar" 
          aria-expanded={isSidebarOpen}
        >
          <i className="fa-solid fa-bars fa-xl" style={{ color: '#095cec' }}></i>
        </span>
      </div>
    </nav>
  );
};

export default Header;
