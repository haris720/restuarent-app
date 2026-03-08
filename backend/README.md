# Restaurant Website - Backend

A complete backend API for a restaurant website built with Node.js, Express, and MongoDB.

## Features

- 🔐 User Authentication (Register/Login with JWT)
- 🍕 Food Menu Management
- 🛒 Order Management
- 📦 Order Tracking
- 👤 User Profile Management
- 🔒 Protected Routes with Middleware

## Technology Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (installed and running locally or MongoDB Atlas account)
- npm or yarn

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Open `.env` file
   - Update MongoDB URI if needed (default: `mongodb://localhost:27017/restaurant`)
   - Update JWT secret for production

4. Start MongoDB (if using local installation):
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongodb
```

5. Seed the database with sample food items:
```bash
node seedData.js
```

6. Start the development server:
```bash
npm run dev
```

Or for production:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (Protected)
- `PUT /api/auth/profile` - Update user profile (Protected)

### Food Routes (`/api/food`)

- `GET /api/food` - Get all food items
- `GET /api/food/:id` - Get single food item
- `GET /api/food/category/list` - Get all categories

### Order Routes (`/api/orders`)

- `POST /api/orders` - Create new order (Protected)
- `GET /api/orders` - Get user's orders (Protected)
- `GET /api/orders/:id` - Get single order (Protected)
- `PUT /api/orders/:id/cancel` - Cancel order (Protected)

## Project Structure

```
backend/
├── models/
│   ├── User.js          # User schema
│   ├── Food.js          # Food schema
│   └── Order.js         # Order schema
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── food.js          # Food routes
│   └── orders.js        # Order routes
├── middleware/
│   └── auth.js          # JWT authentication middleware
├── server.js            # Main server file
├── seedData.js          # Database seeding script
├── package.json         # Dependencies
└── .env                 # Environment variables
```

## Database Models

### User
- name, email, password
- phone, address
- timestamps

### Food
- name, description, price
- category, image, rating
- available, preparationTime
- timestamps

### Order
- user (ref to User)
- items (array of food items)
- totalAmount, status
- deliveryAddress, phone
- specialInstructions
- timestamps

## Environment Variables

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

## Sample Data

The `seedData.js` script includes 15 sample food items across different categories:
- Pizza
- Burger
- Pasta
- Salad
- Main Course
- Appetizer
- Dessert
- Beverage

## Notes

- Make sure MongoDB is running before starting the server
- Run the seed script once to populate the database with sample food items
- Change the JWT secret in production for security
- The API uses CORS to allow requests from the frontend
