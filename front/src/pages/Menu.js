import React, { useState, useEffect } from 'react';
import { foodAPI } from '../api';
import './Menu.css';

function Menu({ addToCart, user }) {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState('');

  const categories = ['All', 'Pizza', 'Burger', 'Pasta', 'Salad', 'Main Course', 'Appetizer', 'Dessert', 'Beverage'];

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const response = await foodAPI.getAll();
      setFoods(response.data.data);
    } catch (err) {
      setError('Failed to load menu items');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (food) => {
    if (!user) {
      setNotification('Please login to add items to cart');
      setTimeout(() => setNotification(''), 3000);
      return;
    }

    addToCart(food);
    setNotification(`${food.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const filteredFoods = foods.filter(food => {
    const matchesCategory = selectedCategory === 'All' || food.category === selectedCategory;
    const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Discover our delicious selection of dishes</p>
        </div>
      </div>

      <div className="container">
        {notification && (
          <div className="notification">{notification}</div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="🔍 Search for food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Filters */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="food-grid">
          {filteredFoods.length === 0 ? (
            <div className="no-results">
              <p>No items found</p>
            </div>
          ) : (
            filteredFoods.map(food => (
              <div key={food._id} className="food-card">
                <div className="food-image">
                  <img src={food.image} alt={food.name} />
                  <span className="food-category">{food.category}</span>
                </div>
                <div className="food-details">
                  <h3>{food.name}</h3>
                  <p className="food-description">{food.description}</p>
                  <div className="food-meta">
                    <span className="rating">⭐ {food.rating}</span>
                    <span className="prep-time">⏱️ {food.preparationTime} min</span>
                  </div>
                  <div className="food-footer">
                    <span className="price">${food.price.toFixed(2)}</span>
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(food)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
