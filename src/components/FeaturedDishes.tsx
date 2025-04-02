
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import NutritionInfo from "./NutritionInfo";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imagePath: string;
  nutritionInfo?: {
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    sugar?: number;
  }
}

const allDishes: Dish[] = [
  {
    id: 1,
    name: "Nyama Choma",
    description: "Grilled meat marinated in traditional Kenyan spices, served with kachumbari salad",
    price: "$18.99",
    category: "Main Course",
    imagePath: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    nutritionInfo: {
      calories: 520,
      protein: 32,
      carbs: 15,
      fat: 18
    }
  },
  {
    id: 2,
    name: "Ugali & Sukuma Wiki",
    description: "Cornmeal porridge served with sautéed collard greens and caramelized onions",
    price: "$12.99",
    category: "Main Course",
    imagePath: "https://images.unsplash.com/photo-1604329760661-e71dc82fd600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    nutritionInfo: {
      calories: 380,
      protein: 12,
      carbs: 65,
      fat: 6
    }
  },
  {
    id: 3,
    name: "Kenyan Pilau",
    description: "Fragrant spiced rice cooked with meat, vegetables, and aromatic spices",
    price: "$15.99",
    category: "Main Course",
    imagePath: "https://images.unsplash.com/photo-1596797038530-2c107aa4020e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80",
    nutritionInfo: {
      calories: 450,
      protein: 18,
      carbs: 60,
      fat: 12
    }
  },
  {
    id: 4,
    name: "Mandazi",
    description: "East African fried bread flavored with cardamom and coconut milk",
    price: "$6.99",
    category: "Dessert",
    imagePath: "https://images.unsplash.com/photo-1562618803-7dffa6e8c9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1909&q=80",
    nutritionInfo: {
      calories: 280,
      protein: 4,
      carbs: 38,
      fat: 12,
      sugar: 8
    }
  },
  {
    id: 5,
    name: "Kenyan Samosas",
    description: "Crispy triangular pastries filled with spiced minced meat or vegetables",
    price: "$8.99",
    category: "Appetizer",
    imagePath: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    nutritionInfo: {
      calories: 220,
      protein: 7,
      carbs: 18,
      fat: 14
    }
  },
  {
    id: 6,
    name: "Chapati",
    description: "Kenyan flat bread made from wheat flour, served with stew or curry",
    price: "$3.99",
    category: "Side",
    imagePath: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    nutritionInfo: {
      calories: 180,
      protein: 4,
      carbs: 28,
      fat: 6
    }
  },
  {
    id: 7,
    name: "Mutura",
    description: "Kenyan blood sausage made with meat and spices, grilled to perfection",
    price: "$9.99",
    category: "Appetizer",
    imagePath: "https://images.unsplash.com/photo-1615937657715-bc7b4b7962fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    nutritionInfo: {
      calories: 320,
      protein: 16,
      carbs: 8,
      fat: 24
    }
  },
  {
    id: 8,
    name: "Mahamri",
    description: "Swahili coconut donuts spiced with cardamom and served with honey",
    price: "$5.99",
    category: "Dessert",
    imagePath: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    nutritionInfo: {
      calories: 250,
      protein: 3,
      carbs: 35,
      fat: 10,
      sugar: 15
    }
  }
];

const categories = ["All", "Main Course", "Appetizer", "Side", "Dessert"];

const FeaturedDishes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredDishes = selectedCategory === "All" 
    ? allDishes.slice(0, 4) 
    : allDishes.filter(dish => dish.category === selectedCategory).slice(0, 4);

  return (
    <section className="bg-white section relative">
      {/* Decorative texture */}
      <div className="absolute inset-0 kenyan-dots opacity-70"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-tamtam-green/10 text-tamtam-green rounded-full text-sm font-medium mb-4 font-neutra">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-neutra font-bold mb-2 heading-underline relative inline-block">
            Signature Dishes
            <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-tamtam-orange/30 rounded-full my-6"></div>
          <p className="text-tamtam-gray max-w-2xl mx-auto font-neutra">
            Discover the vibrant flavors of Kenya through our carefully crafted dishes, 
            made with authentic spices and fresh ingredients.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`font-neutra ${
                  selectedCategory === category 
                    ? "bg-tamtam-orange hover:bg-tamtam-orange/90 text-white"
                    : "border-tamtam-orange text-tamtam-orange hover:bg-tamtam-orange hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDishes.map((dish) => (
            <Card 
              key={dish.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 card-hover bg-white border-0 shadow-md"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={dish.imagePath} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-tamtam-orange text-white text-xs px-3 py-1 rounded-full">
                    {dish.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6 relative">
                <div className="absolute -top-6 right-4 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="font-neutra text-tamtam-orange font-bold">{dish.price}</span>
                </div>
                <h3 className="font-neutra text-xl text-tamtam-black mb-2 font-bold">{dish.name}</h3>
                <p className="text-tamtam-gray mb-4 text-sm font-neutra">{dish.description}</p>
                
                {dish.nutritionInfo && (
                  <NutritionInfo {...dish.nutritionInfo} />
                )}
                
                <div className="flex justify-between items-center mt-4">
                  <Button variant="ghost" size="sm" className="text-tamtam-green hover:text-tamtam-green/90 p-0 group font-neutra">
                    Order
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-kenyan font-neutra">
              View Full Menu
              <ChevronRight className="ml-1 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
