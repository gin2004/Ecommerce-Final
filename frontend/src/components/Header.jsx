import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Bell, User } from 'lucide-react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          ElectricMarket
        </Link>
        
        <div className="search-bar">
          <Search size={20} className="search-icon" color="#999" />
          <input type="text" placeholder="Tìm kiếm sản phẩm, thương hiệu..." />
        </div>

        <nav className="header-nav">
          <Link to="/" className="nav-link active">Electronics</Link>
          <Link to="/" className="nav-link">Fashion</Link>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">Beauty</Link>
        </nav>

        <div className="header-actions">
          <Link to="/checkout" className="action-btn">
            <ShoppingCart size={20} />
          </Link>
          <button className="action-btn">
            <Bell size={20} />
            <span className="badge"></span>
          </button>
          <Link to="/login" className="action-btn">
            <User size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
