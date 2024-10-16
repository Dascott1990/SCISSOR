import React, { useState } from 'react';
import Features from './Features'; // Import Features component

const HeaderHero: React.FC<{ toggleSidebar: () => void }> = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false); // State for showing Features

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Function to handle feature click
  const handleFeatureClick = (feature: string) => {
    if (feature === 'feature2') {
      setShowFeatures(true); // Show Features component if feature 2 is clicked
    }
    setDropdownOpen(false); // Close dropdown
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="home sticky" id="home">
        <div className="nav-center">
          <div className="logo">
            <img className="logo-icon" src="./images/Logo.svg" alt="nav-logo" />
          </div>

          <ul className="nav-links">
            <li><a className="nav-link primary-blue-300" href="#home">My URLs</a></li>
            <li className="feature-tag">
              <a className="nav-link" href="#features" onClick={toggleDropdown}>Features</a>
              <img src="./images/down-arrow.svg" alt="toggle-dropdown" onClick={toggleDropdown} />
              {isDropdownOpen && (
                <ul className="dropdown">
                  <li>
                    <a href="#feature1" onClick={() => handleFeatureClick('feature1')}>Feature 1</a>
                  </li>
                  <li>
                    <a href="#feature2" onClick={() => handleFeatureClick('feature2')}>Feature 2</a>
                  </li>
                  <li>
                    <a href="#feature3" onClick={() => handleFeatureClick('feature3')}>Feature 3</a>
                  </li>
                </ul>
              )}
            </li>
            <li><a className="nav-link" href="#pricing">Pricing</a></li>
            <li><a className="nav-link" href="#form">Analytics</a></li>
            <li><a className="nav-link" href="#questions">FAQs</a></li>
          </ul>

          <ul className="signin-links">
            <li><a className="signin-link primary-blue-300" href="#">Log in</a></li>
            <li><a className="signin-link btn-blue btn" href="#">Try for free</a></li>
          </ul>
        </div>
      </nav>

      {/* Conditional Rendering for Features Section */}
      {showFeatures && <Features />}

      {/* Header Content */}
      <header>
        <div className="header-center">
          <h1 className="header-title">
            Optimize Your Online Experience with Our Advanced
            <span className="primary-blue-400 header-bold"> URL Shortening
              <span className="header-bold-underline">
                <img src="./images/underline.svg" alt="" />
              </span>
            </span>
            ' Solution
          </h1>
          <p className="header-text">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization options
            to reinforce your brand presence and enhance user engagement.
          </p>
          <div className="header-btns">
            <button className="header-btn btn-blue btn">Sign up</button>
            <button className="header-btn bg-none primary-blue-300 btn">Learn more</button>
          </div>
          <div className="chain-container">
            <div className="boxlogo">
              <img src="./images/chain.svg" alt="boxlogo" />
              <p className="chain-text">
                Seamlessly transform your long URLs into concise and shareable
                links with just a few clicks.
              </p>
            </div>
            <div className="chain-bg">
              <img src="./images/background-chain.svg" className="chain-img" alt="" />
            </div>
          </div>
        </div>
        <div className="circle-layer">
          <img src="./images/circle-layer.svg" alt="" className="circle-layer-img" />
        </div>
      </header>
    </>
  );
};

export default HeaderHero;
export {}; // This line ensures the file is treated as a module
