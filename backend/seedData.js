const Product = require('./models/Product');

const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    category: "Electronics",
    stock: 50
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    description: "Fitness tracking smartwatch with heart rate monitor and GPS",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    category: "Electronics",
    stock: 30
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    description: "Durable laptop backpack with USB charging port and anti-theft design",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Accessories",
    stock: 75
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    description: "RGB mechanical gaming keyboard with cherry MX switches",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    category: "Electronics",
    stock: 40
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 39.99,
    description: "Ergonomic wireless mouse with precision tracking and long battery life",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    category: "Electronics",
    stock: 60
  },
  {
    id: 6,
    name: "USB-C Hub",
    price: 59.99,
    description: "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500",
    category: "Accessories",
    stock: 45
  },
  {
    id: 7,
    name: "Portable Charger",
    price: 34.99,
    description: "20000mAh portable power bank with fast charging support",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500",
    category: "Accessories",
    stock: 80
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 89.99,
    description: "Waterproof Bluetooth speaker with 360-degree sound and 12-hour battery",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    category: "Electronics",
    stock: 35
  },
  {
    id: 9,
    name: "Phone Stand",
    price: 19.99,
    description: "Adjustable aluminum phone stand for desk with cable management",
    image: "https://images.unsplash.com/photo-1601524924357-0e2f8bf5d380?w=500",
    category: "Accessories",
    stock: 100
  },
  {
    id: 10,
    name: "Webcam HD",
    price: 69.99,
    description: "1080p HD webcam with auto-focus and built-in microphone",
    image: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500",
    category: "Electronics",
    stock: 25
  }
];

const seedDatabase = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Insert mock products
    await Product.insertMany(mockProducts);
    console.log('Mock products inserted successfully');
    console.log(`Total products: ${mockProducts.length}`);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};

module.exports = seedDatabase;
