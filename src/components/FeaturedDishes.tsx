
import React from "react";
import { Link } from "react-router-dom";
import DishCard from "./DishCard";

interface FeaturedDishesProps {
  mobileLimit?: number;
}

const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ mobileLimit = 4 }) => {
  const featuredDishes = [
    {
      id: 1,
      name: "Nyama Choma",
      description: "Grilled meat seasoned with traditional Kenyan spices, served with kachumbari salad",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      rating: 4.9,
      reviewCount: 128,
      category: "Main Course",
      tags: ["Popular", "Spicy"]
    },
    {
      id: 2,
      name: "Ugali with Sukuma Wiki",
      description: "Traditional cornmeal dish served with sautéed collard greens and caramelized onions",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.7,
      reviewCount: 86,
      category: "Main Course",
      tags: ["Vegetarian", "Traditional"]
    },
    {
      id: 3,
      name: "Pilau Rice",
      description: "Fragrant rice cooked with meat, aromatic spices, and served with kachumbari",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      rating: 4.8,
      reviewCount: 104,
      category: "Main Course",
      tags: ["Popular", "Aromatic"]
    },
    {
      id: 4,
      name: "Mandazi",
      description: "Sweet, fluffy African donuts with a hint of cardamom and coconut milk",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1620921568790-c1cf8984624c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      rating: 4.6,
      reviewCount: 72,
      category: "Dessert",
      tags: ["Sweet", "Breakfast"]
    }
  ];

  // For mobile view, limit the number of dishes shown
  const visibleDishes = window.innerWidth < 768 ? featuredDishes.slice(0, mobileLimit) : featuredDishes;

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 bg-tamtam-orange-100 text-tamtam-orange-600 rounded-full text-sm font-medium">
          Our Signature Dishes
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
          Authentic Kenyan Flavors
        </h2>
        <div className="h-1 w-24 bg-tamtam-orange-600/30 rounded-full mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-tamtam-gray">
          Explore our chef's selection of traditional Kenyan dishes, prepared with authentic recipes and the freshest ingredients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/menu" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-tamtam-orange-600 hover:bg-tamtam-orange-700 transition-colors duration-200">
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default FeaturedDishes;
