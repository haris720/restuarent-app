import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, onLogout, cartCount }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🍽️</span>
          <span className="brand-text">Delicious Bites</span>
        </Link>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          
          {user ? (
            <>
              <li>
                <Link to="/cart" className="cart-link">
                  🛒 Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                </Link>
              </li>
              <li><Link to="/orders">Orders</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li>
                <button onClick={handleLogout} className="btn btn-outline btn-sm">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="btn btn-outline btn-sm">Login</Link></li>
              <li><Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
