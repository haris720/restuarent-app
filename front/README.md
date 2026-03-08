# Restaurant Website - Frontend

A modern, responsive restaurant website built with React, featuring user authentication, menu browsing, cart management, and order tracking.

## Features

- 🏠 Beautiful landing page with animations
- 🔐 User authentication (Register/Login)
- 🍕 Browse food menu with categories and search
- 🛒 Shopping cart functionality
- 📦 Order placement and tracking
- 👤 User profile management
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations

## Technology Stack

- **React** - Frontend library
- **React Router** - Navigation
- **Axios** - HTTP requests
- **CSS3** - Styling and animations
- **Google Fonts** - Typography (Poppins, Playfair Display)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:5000`

## Installation

1. Navigate to the frontend directory:
```bash
cd front
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs tests
- `npm eject` - Ejects from Create React App

## Project Structure

```
front/
├── public/
│   └── index.html       # HTML template
├── src/
│   ├── components/
│   │   ├── Navbar.js    # Navigation bar
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js      # Landing page
│   │   ├── Home.css
│   │   ├── Login.js     # Login page
│   │   ├── Register.js  # Registration page
│   │   ├── Auth.css     # Auth pages styling
│   │   ├── Menu.js      # Food menu page
│   │   ├── Menu.css
│   │   ├── Cart.js      # Shopping cart
│   │   ├── Cart.css
│   │   ├── Orders.js    # Order history
│   │   ├── Orders.css
│   │   ├── Profile.js   # User profile
│   │   └── Profile.css
│   ├── App.js           # Main app component
│   ├── App.css          # App styling
│   ├── api.js           # API configuration
│   ├── index.js         # Entry point
│   └── index.css        # Global styles
└── package.json         # Dependencies
```

## Key Features Explained

### Authentication
- Users can register with name, email, password, phone, and address
- Login with email and password
- JWT token stored in localStorage
- Protected routes redirect to login if not authenticated

### Menu
- Browse all food items
- Filter by category (Pizza, Burger, Pasta, etc.)
- Search by name
- View food details (price, rating, preparation time)
- Add items to cart

### Cart
- View cart items with quantities
- Update quantities or remove items
- See total amount
- Checkout with delivery details
- Place orders

### Orders
- View order history
- Track order status (Pending, Confirmed, Preparing, Ready, Delivered)
- Cancel orders (if not delivered)
- View order details

### Profile
- View user information
- Edit profile (name, phone, address)
- Update delivery information

## Styling

The application uses a modern design with:
- Custom color scheme (Orange/Peach gradient theme)
- Google Fonts (Poppins for body, Playfair Display for headings)
- Smooth animations and transitions
- Responsive design for all screen sizes
- Card-based layouts
- Gradient buttons and backgrounds
- Box shadows for depth

## Color Scheme

```css
--primary-color: #ff6b35;    /* Orange */
--secondary-color: #f7931e;  /* Golden Orange */
--dark-color: #1a1a1a;       /* Almost Black */
--light-color: #f4f4f4;      /* Light Gray */
--white: #ffffff;
--success-color: #28a745;    /* Green */
--danger-color: #dc3545;     /* Red */
--gray: #6c757d;
```

## API Integration

The frontend connects to the backend API using Axios:
- Base URL: `http://localhost:5000/api`
- Automatic JWT token injection for authenticated requests
- Error handling for failed requests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- Make sure the backend server is running before starting the frontend
- The application uses localStorage to persist user session and cart
- Images are loaded from Unsplash (placeholder images)
- All API routes require the backend to be accessible at `http://localhost:5000`

## Future Enhancements

- Payment gateway integration
- Real-time order tracking
- Review and rating system
- Favorite items
- Order history filtering
- Admin dashboard
