import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './Header.css';

export function Header() {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="left-section">
          <div className="logo-container">
            <XMarkIcon className="logo-icon" />
          </div>
          <h2 className="title">Select your meals</h2>
        </div>
        <div className="right-section">
          <div className="step-indicator">
            <p className="step-text">Step 1/3</p>
            <div className="progress-bar">
              <div className="step-dot primary"></div>
              <div className="step-dot"></div>
              <div className="step-dot"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
    </section>
  );
}
