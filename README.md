# 🍽️ Delicious Bites - Restaurant Website

[![GitHub](https://img.shields.io/badge/GitHub-Restaurant%20App-blue)](https://github.com/haris720/restuarent-app)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green)](https://www.mongodb.com/)
[![React](https://img.shields.io/badge/Frontend-React-61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/API-Express-000000)](https://expressjs.com/)

A complete, full-stack restaurant website with modern UI, user authentication, menu browsing, shopping cart, and order management.

![Restaurant Website](https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200)

## ✨ Features

### User Features
- 🔐 **Authentication** - Register and login with JWT
- 🍕 **Browse Menu** - View delicious food items with images and details
- 🔍 **Search & Filter** - Find food by category or search
- 🛒 **Shopping Cart** - Add items, update quantities, manage cart
- 📦 **Order Management** - Place orders and track status
- 👤 **Profile Management** - Update personal information and delivery details
- 📱 **Responsive Design** - Works perfectly on all devices

### Technical Features
- Modern React frontend with smooth animations
- RESTful API with Node.js and Express
- MongoDB database for data persistence
- JWT-based authentication
- Protected routes and middleware
- Input validation
- Error handling

## 🛠️ Technology Stack

### Frontend
- React 18
- React Router v6
- Axios
- CSS3 with animations
- Google Fonts

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS enabled

## 📋 Prerequisites

Before running this application, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone or Download the Project

```bash
cd resturent-website
```

### 2. Setup Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Make sure MongoDB is running
# For Windows: mongod
# For Mac/Linux: sudo systemctl start mongodb

# Seed the database with sample food items
node seedData.js

# Start the backend server
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal window:

```bash
# Navigate to frontend folder
cd front

# Install dependencies
npm install

# Start the React development server
npm start
```

Frontend will open automatically at `http://localhost:3000`

## 📖 Usage Guide

### First Time Setup

1. **Start MongoDB** - Ensure MongoDB is running on your system
2. **Run Backend** - Start the backend server (port 5000)
3. **Seed Database** - Run `node seedData.js` to add sample food items
4. **Run Frontend** - Start the React app (port 3000)

### Using the Application

1. **Register** - Create a new account with your details
2. **Browse Menu** - Explore the food menu with 15+ items
3. **Add to Cart** - Select items and add them to your cart
4. **Checkout** - Provide delivery details and place your order
5. **Track Orders** - View your order history and status
6. **Manage Profile** - Update your personal information

## 🗂️ Project Structure

```
resturent-website/
│
├── backend/                 # Backend API
│   ├── models/             # Database models
│   │   ├── User.js
│   │   ├── Food.js
│   │   └── Order.js
│   ├── routes/             # API routes
│   │   ├── auth.js
│   │   ├── food.js
│   │   └── orders.js
│   ├── middleware/         # Custom middleware
│   │   └── auth.js
│   ├── server.js           # Server entry point
│   ├── seedData.js         # Database seeding
│   ├── package.json
│   ├── .env                # Environment variables
│   └── README.md
│
└── front/                   # React Frontend
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/     # Reusable components
    │   │   └── Navbar.js
    │   ├── pages/          # Page components
    │   │   ├── Home.js
    │   │   ├── Login.js
    │   │   ├── Register.js
    │   │   ├── Menu.js
    │   │   ├── Cart.js
    │   │   ├── Orders.js
    │   │   └── Profile.js
    │   ├── App.js
    │   ├── api.js          # API configuration
    │   └── index.js
    ├── package.json
    └── README.md
```

## 🎨 Design Highlights

- **Modern UI** - Clean, professional design with gradient accents
- **Smooth Animations** - Fade-ins, slide-ups, and hover effects
- **Responsive Layout** - Mobile-first approach, works on all screen sizes
- **Color Scheme** - Warm orange/peach gradient theme
- **Typography** - Poppins for body, Playfair Display for headings
- **Icons** - Emoji-based icons for a friendly feel

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update profile

### Food
- `GET /api/food` - Get all food items
- `GET /api/food/:id` - Get single food item

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `PUT /api/orders/:id/cancel` - Cancel order

## 🔒 Environment Variables

Backend `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/restaurant
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
```

## 📝 Sample Food Categories

- 🍕 Pizza
- 🍔 Burger
- 🍝 Pasta
- 🥗 Salad
- 🍽️ Main Course
- 🥟 Appetizer
- 🍰 Dessert
- 🥤 Beverage

## 🐛 Troubleshooting

**Backend won't start:**
- Check if MongoDB is running
- Verify port 5000 is not in use
- Check MongoDB connection string in `.env`

**Frontend won't connect to backend:**
- Ensure backend is running on port 5000
- Check CORS settings in backend
- Verify API base URL in `front/src/api.js`

**Can't see food items:**
- Run the seed script: `node seedData.js`
- Check MongoDB connection
- Verify database name

## 🚀 Production Deployment

### Backend
1. Set `NODE_ENV=production` in `.env`
2. Update `JWT_SECRET` with a strong secret
3. Use MongoDB Atlas for production database
4. Deploy to services like Heroku, DigitalOcean, or AWS

### Frontend
1. Build the React app: `npm run build`
2. Deploy the `build` folder to Netlify, Vercel, or similar
3. Update API base URL to production backend URL

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created with ❤️ for learning full-stack web development

## 🙏 Acknowledgments

- Food images from Unsplash
- Icons: Emoji-based
- Fonts: Google Fonts (Poppins, Playfair Display)

---

**Enjoy building and using this restaurant website! Happy coding! 🍕**
