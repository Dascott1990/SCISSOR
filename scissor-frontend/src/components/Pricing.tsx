// src/components/Pricing.tsx
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="section-center pricing-center">
        <div className="pricing-title-container">
          <div className="section-title-bar"></div>
          <h1 className="features-title pricing-title">
            A <span className="primary-blue-400">price perfect</span> for your
            needs.
          </h1>
        </div>
        <p className="pricing-para">
          From catering for your personal, business, event, socials needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
        <div className="prices">
          {/* single price */}
          <article className="price">
            <h3 className="price-plan">Basic</h3>
            <h2 className="price-type">Free</h2>
            <p className="price-text">Free plan for all users</p>
            <ul className="price-lists">
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                URL Shortening
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                Basic Link Analytics
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                Customizable Short Links
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                Standard Support
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Unlimited
                Ad-Supported
              </li>
            </ul>
          </article>

          {/* single price */}
          <article className="price price-active">
            <h3 className="price-plan">Professional</h3>
            <h2 className="price-type">$15/ month</h2>
            <p className="price-text">Ideal for business creators</p>
            <ul className="price-lists">
              <li className="price-option">
                <img src="./images/check-circle.svg" alt="" /> Enhanced Link
                Analytics
              </li>
              <li className="price-option">
                <img src="./images/check-circle.svg" alt="" /> Custom Branded
                Domains
              </li>
              <li className="price-option">
                <img src="./images/check-circle.svg" alt="" /> Advanced Link
                Customization
              </li>
              <li className="price-option">
                <img src="./images/check-circle.svg" alt="" /> Priority Support
              </li>
              <li className="price-option">
                <img src="./images/check-circle.svg" alt="" /> Ad-free
                Experience
              </li>
            </ul>
          </article>

          {/* single price */}
          <article className="price">
            <h3 className="price-plan">Teams</h3>
            <h2 className="price-type">$25/ month</h2>
            <p className="price-text">Share with up to 10 users</p>
            <ul className="price-lists">
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Team
                Collaboration
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> User Roles
                and Permissions
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Enhance
                Security
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> API Access
              </li>
              <li className="price-option">
                <img src="./images/check-circle-blue.svg" alt="" /> Dedicated
                Account Manager
              </li>
            </ul>
          </article>
        </div>
        <div className="pricing-btns">
          <a href="#" className="btn pricing-btn btn-blue">Get Customer Pricing</a>
          <a href="#" className="btn pricing-btn btn-white">Select Pricing</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
export {}; // This line ensures the file is treated as a module
