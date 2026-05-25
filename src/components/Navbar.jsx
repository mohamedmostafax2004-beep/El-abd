import React, { useState } from 'react';
import { ShoppingCart, Moon, Sun, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ cartCount, toggleCart, toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar glass">
        <div className="container navbar-container">
          <div className="navbar-brand">
            <span className="brand-text text-accent">مفروشات</span> العبد
          </div>
          
          <div className="navbar-actions">
            <button className="btn-icon" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="btn-icon cart-btn" onClick={toggleCart} aria-label="Cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="btn-icon" onClick={toggleMenu} aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Side Menu */}
      {isMenuOpen && <div className="cart-overlay" onClick={toggleMenu}></div>}
      <div className={`side-menu glass ${isMenuOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>القائمة</h2>
          <button className="btn-icon" onClick={toggleMenu} aria-label="Close Menu">
            <X size={24} />
          </button>
        </div>
        <ul className="side-menu-links">
          <li><a href="#hero" onClick={toggleMenu}>الرئيسية</a></li>
          <li><a href="#products" onClick={toggleMenu}>منتجاتنا</a></li>
          <li><a href="#about" onClick={toggleMenu}>من نحن</a></li>
        </ul>
      </div>
    </>
  );
}
