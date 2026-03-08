import React, { useState, useEffect } from 'react';
import { orderAPI } from '../api';
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await orderAPI.getAll();
      setOrders(response.data.data);
    } catch (err) {
      setError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to cancel this order?')) {
      return;
    }

    try {
      await orderAPI.cancel(orderId);
      fetchOrders(); // Refresh orders
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to cancel order');
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      'Pending': '#ffc107',
      'Confirmed': '#17a2b8',
      'Preparing': '#ff6b35',
      'Ready': '#28a745',
      'Delivered': '#28a745',
      'Cancelled': '#dc3545'
    };
    return colors[status] || '#6c757d';
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="container">
        <h1 className="page-title">My Orders</h1>

        {error && <div className="alert alert-danger">{error}</div>}

        {orders.length === 0 ? (
          <div className="no-orders">
            <div className="no-orders-icon">📦</div>
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders yet. Start ordering delicious food!</p>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map(order => (
              <div key={order._id} className="order-card">
                <div className="order-header">
                  <div>
                    <h3>Order #{order._id.slice(-8).toUpperCase()}</h3>
                    <p className="order-date">{formatDate(order.orderDate)}</p>
                  </div>
                  <span 
                    className="order-status"
                    style={{ background: getStatusColor(order.status) }}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="order-items">
                  {order.items.map((item, index) => (
                    <div key={index} className="order-item">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity">x{item.quantity}</span>
                      <span className="item-price">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="order-details">
                  <div className="detail-row">
                    <span className="detail-label">📍 Delivery Address:</span>
                    <span>{order.deliveryAddress}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">📞 Phone:</span>
                    <span>{order.phone}</span>
                  </div>
                  {order.specialInstructions && (
                    <div className="detail-row">
                      <span className="detail-label">📝 Special Instructions:</span>
                      <span>{order.specialInstructions}</span>
                    </div>
                  )}
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    <span>Total:</span>
                    <span className="total-amount">${order.totalAmount.toFixed(2)}</span>
                  </div>
                  {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleCancelOrder(order._id)}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
