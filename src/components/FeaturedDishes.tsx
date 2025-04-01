
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  imagePath: string;
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Nyama Choma",
    description: "Grilled meat marinated in traditional Kenyan spices, served with kachumbari salad",
    price: "$18.99",
    category: "Main Course",
    imagePath: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 2,
    name: "Ugali & Sukuma Wiki",
    description: "Cornmeal porridge served with sautéed collard greens and caramelized onions",
    price: "$12.99",
    category: "Main Course",
    imagePath: "https://images.unsplash.com/photo-1604329760661-e71dc82fd600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Kenyan Pilau",
    description: "Fragrant spiced rice cooked with meat, vegetables, and aromatic spices",
    price: "$15.99",
    category: "Main Course",
    imagePath: "https://images.unsplash.com/photo-1596797038530-2c107aa4020e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
  },
  {
    id: 4,
    name: "Mandazi",
    description: "East African fried bread flavored with cardamom and coconut milk",
    price: "$6.99",
    category: "Dessert",
    imagePath: "https://images.unsplash.com/photo-1562618803-7dffa6e8c9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1909&q=80"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="bg-white section relative">
      {/* Decorative texture */}
      <div className="absolute inset-0 kenyan-dots opacity-70"></div>
      
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-tamtam-green/10 text-tamtam-green rounded-full text-sm font-medium mb-4">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-2 heading-underline relative inline-block">
            Signature Dishes
            <span className="absolute -right-6 top-0 text-tamtam-orange">•</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-tamtam-orange/30 rounded-full my-6"></div>
          <p className="text-tamtam-gray max-w-2xl mx-auto">
            Discover the vibrant flavors of Kenya through our carefully crafted dishes, 
            made with authentic spices and fresh ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish, index) => (
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
                  <span className="font-greneette text-tamtam-orange font-bold">{dish.price}</span>
                </div>
                <h3 className="font-greneette text-xl text-tamtam-black mb-2">{dish.name}</h3>
                <p className="text-tamtam-gray mb-4 text-sm">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <Button variant="ghost" size="sm" className="text-tamtam-green hover:text-tamtam-green/90 p-0 group">
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
            <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-kenyan">
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
