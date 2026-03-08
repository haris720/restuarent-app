import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title">Welcome to Delicious Bites</h1>
          <p className="hero-subtitle">Fresh, Delicious Food Delivered to Your Doorstep</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary btn-lg">
              View Menu
            </Link>
            <Link to="/register" className="btn btn-outline btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍕</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients to prepare your meals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery right to your door</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Expert Chefs</h3>
              <p>Prepared by experienced and passionate chefs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Great Prices</h3>
              <p>Affordable prices without compromising on quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Join thousands of satisfied customers enjoying delicious meals</p>
            <Link to="/menu" className="btn btn-primary btn-lg">
              Order Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
