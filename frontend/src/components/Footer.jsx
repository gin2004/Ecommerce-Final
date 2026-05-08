import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">ElectricMarket</div>
          <p className="copyright">© 2024 ElectricMarket. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <Link to="#">About</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Contact Support</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
