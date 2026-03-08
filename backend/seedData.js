const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('./models/Food');

dotenv.config();

// Sample food data
const sampleFoods = [
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil",
    price: 12.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
    rating: 4.8,
    preparationTime: 20
  },
  {
    name: "Cheeseburger Deluxe",
    description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce",
    price: 10.99,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    rating: 4.7,
    preparationTime: 15
  },
  {
    name: "Caesar Salad",
    description: "Crispy romaine lettuce with parmesan cheese, croutons, and Caesar dressing",
    price: 8.99,
    category: "Salad",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500",
    rating: 4.5,
    preparationTime: 10
  },
  {
    name: "Spaghetti Carbonara",
    description: "Creamy pasta with bacon, egg yolk, and parmesan cheese",
    price: 14.99,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500",
    rating: 4.9,
    preparationTime: 25
  },
  {
    name: "Grilled Salmon",
    description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon",
    price: 18.99,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500",
    rating: 4.8,
    preparationTime: 30
  },
  {
    name: "Chicken Wings",
    description: "Crispy chicken wings with your choice of BBQ or buffalo sauce",
    price: 9.99,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=500",
    rating: 4.6,
    preparationTime: 20
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream",
    price: 7.99,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500",
    rating: 4.9,
    preparationTime: 15
  },
  {
    name: "Fresh Lemonade",
    description: "Refreshing homemade lemonade with fresh lemons and mint",
    price: 3.99,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=500",
    rating: 4.5,
    preparationTime: 5
  },
  {
    name: "Pepperoni Pizza",
    description: "Classic pizza loaded with pepperoni and mozzarella cheese",
    price: 13.99,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500",
    rating: 4.7,
    preparationTime: 20
  },
  {
    name: "Grilled Chicken Burger",
    description: "Tender grilled chicken breast with lettuce, tomato, and mayo",
    price: 11.99,
    category: "Burger",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500",
    rating: 4.6,
    preparationTime: 18
  },
  {
    name: "Greek Salad",
    description: "Fresh Mediterranean salad with feta cheese, olives, and cucumber",
    price: 9.99,
    category: "Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500",
    rating: 4.7,
    preparationTime: 10
  },
  {
    name: "Penne Alfredo",
    description: "Penne pasta in creamy alfredo sauce with garlic and parmesan",
    price: 13.99,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500",
    rating: 4.8,
    preparationTime: 22
  },
  {
    name: "Mozzarella Sticks",
    description: "Crispy fried mozzarella sticks served with marinara sauce",
    price: 7.99,
    category: "Appetizer",
    image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500",
    rating: 4.5,
    preparationTime: 12
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 8.99,
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500",
    rating: 4.9,
    preparationTime: 10
  },
  {
    name: "Iced Coffee",
    description: "Cold brew coffee served over ice with your choice of milk",
    price: 4.99,
    category: "Beverage",
    image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=500",
    rating: 4.6,
    preparationTime: 5
  }
];

// Connect to database and seed
const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('✅ MongoDB connected');

    // Clear existing food items
    await Food.deleteMany({});
    console.log('🗑️  Cleared existing food items');

    // Insert sample data
    const foods = await Food.insertMany(sampleFoods);
    console.log(`✅ Inserted ${foods.length} food items`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
