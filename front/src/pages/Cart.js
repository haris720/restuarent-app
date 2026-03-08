import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orderAPI } from '../api';
import './Cart.css';

function Cart({ cart, updateQuantity, removeFromCart, clearCart, user }) {
  const navigate = useNavigate();
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderData, setOrderData] = useState({
    deliveryAddress: user?.address || '',
    phone: user?.phone || '',
    specialInstructions: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleQuantityChange = (foodId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(foodId, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setError('Your cart is empty');
      return;
    }
    setShowCheckout(true);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const order = {
        items: cart.map(item => ({
          food: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        totalAmount: calculateTotal(),
        deliveryAddress: orderData.deliveryAddress,
        phone: orderData.phone,
        specialInstructions: orderData.specialInstructions
      };

      const response = await orderAPI.create(order);
      
      if (response.data.success) {
        clearCart();
        navigate('/orders');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !showCheckout) {
    return (
      <div className="cart-page">
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Add some delicious items to get started!</p>
            <button 
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/menu')}
            >
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        {!showCheckout ? (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-category">{item.category}</p>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button 
                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item._id)}
                      className="remove-btn"
                    >
                      🗑️ Remove
                    </button>
                  </div>
                  <div className="cart-item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>$5.00</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${(calculateTotal() + 5).toFixed(2)}</span>
              </div>
              <button 
                className="btn btn-primary btn-block"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
              <button 
                className="btn btn-secondary btn-block mt-2"
                onClick={() => navigate('/menu')}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={handlePlaceOrder}>
              <div className="form-group">
                <label>Delivery Address *</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={orderData.deliveryAddress}
                  onChange={(e) => setOrderData({...orderData, deliveryAddress: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  value={orderData.phone}
                  onChange={(e) => setOrderData({...orderData, phone: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label>Special Instructions (Optional)</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Any special requests for your order?"
                  value={orderData.specialInstructions}
                  onChange={(e) => setOrderData({...orderData, specialInstructions: e.target.value})}
                />
              </div>

              <div className="checkout-summary">
                <h3>Order Total: ${(calculateTotal() + 5).toFixed(2)}</h3>
              </div>

              <button 
                type="submit" 
                className="btn btn-success btn-block"
                disabled={loading}
              >
                {loading ? 'Placing Order...' : 'Place Order'}
              </button>
              <button 
                type="button"
                className="btn btn-secondary btn-block mt-2"
                onClick={() => setShowCheckout(false)}
              >
                Back to Cart
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
