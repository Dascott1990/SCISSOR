// src/components/Features.tsx
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="section-center features-center">
        <div className="features-title-container">
          <div className="section-title-bar"></div>
          <div className="features-title-text">
            <h1 className="features-title">
              Why choose <span className="primary-blue-400">Scissors</span>
            </h1>
            <p className="features-title-para">
              Scissors is the hub of everything that has to do with your link
              management. We shorten your URLs, allow you creating custom ones
              for your personal, business, and event usage. Our swift QR code
              creation, management, and usage tracking with advanced analytics 
              for all of these is second to none.
            </p>
          </div>
        </div>

        <div className="features-list">
          <article className="feature">
            <div className="feature-icon">
              <img src="./images/url-shortening.svg" alt="" />
            </div>
            <div className="feature-text">
              <h2>URL Shortening</h2>
              <p>
                Scissor allows you to shorten URLs of your business and events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
          </article>
          <article className="feature">
            <div className="feature-icon">
              <img src="./images/edit.svg" alt="" />
            </div>
            <div className="feature-text">
              <h2>Custom URLs</h2>
              <p>
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
          </article>
          <article className="feature">
            <div className="feature-icon">
              <img src="./images/grid (1).svg" alt="" />
            </div>
            <div className="feature-text">
              <h2>QR Codes</h2>
              <p>
                Generate QR codes for your business and events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
          </article>
          <article className="feature">
            <div className="feature-icon">
              <img src="./images/activity.svg" alt="" />
            </div>
            <div className="feature-text">
              <h2>Data Analytics</h2>
              <p>
                Receive data on the usage of either your shortened URLs, custom
                URLs, or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Features;
export {}; // This line ensures the file is treated as a module
