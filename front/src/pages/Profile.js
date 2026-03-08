import React, { useState } from 'react';
import { authAPI } from '../api';
import './Profile.css';

function Profile({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await authAPI.updateProfile(formData);
      
      if (response.data.success) {
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setMessage({ type: 'success', text: 'Profile updated successfully!' });
        setIsEditing(false);
      }
    } catch (err) {
      setMessage({ 
        type: 'error', 
        text: err.response?.data?.message || 'Failed to update profile' 
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || '',
      phone: user?.phone || '',
      address: user?.address || ''
    });
    setIsEditing(false);
    setMessage({ type: '', text: '' });
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-avatar">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <h1>{user?.name}</h1>
            <p className="profile-email">{user?.email}</p>
          </div>

          {message.text && (
            <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
              {message.text}
            </div>
          )}

          <div className="profile-card">
            {!isEditing ? (
              <div className="profile-view">
                <h2>Profile Information</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">👤 Full Name</span>
                    <span className="info-value">{user?.name || 'Not provided'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">✉️ Email</span>
                    <span className="info-value">{user?.email}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📞 Phone</span>
                    <span className="info-value">{user?.phone || 'Not provided'}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">📍 Address</span>
                    <span className="info-value">{user?.address || 'Not provided'}</span>
                  </div>
                </div>
                <button 
                  className="btn btn-primary btn-block"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <div className="profile-edit">
                <h2>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Delivery Address</label>
                    <textarea
                      name="address"
                      className="form-control"
                      rows="3"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="button-group">
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                    <button 
                      type="button"
                      className="btn btn-secondary"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
