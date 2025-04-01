
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

const featuredDishes: Dish[] = [
  {
    id: 1,
    name: "Nyama Choma",
    description: "Grilled meat marinated in traditional Kenyan spices, served with kachumbari salad",
    price: "$18.99",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Ugali & Sukuma Wiki",
    description: "Cornmeal porridge served with sautéed collard greens and caramelized onions",
    price: "$12.99",
    category: "Main Course"
  },
  {
    id: 3,
    name: "Kenyan Pilau",
    description: "Fragrant spiced rice cooked with meat, vegetables, and aromatic spices",
    price: "$15.99",
    category: "Main Course"
  },
  {
    id: 4,
    name: "Mandazi",
    description: "East African fried bread flavored with cardamom and coconut milk",
    price: "$6.99",
    category: "Dessert"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="bg-white section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-greneette font-bold mb-4">Our Signature Dishes</h2>
          <p className="text-tamtam-gray max-w-2xl mx-auto">
            Discover the vibrant flavors of Kenya through our carefully crafted dishes, made with authentic spices and fresh ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => (
            <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-tamtam-orange/20 to-tamtam-green/20 flex items-center justify-center">
                <h3 className="font-greneette text-2xl text-tamtam-black">{dish.name}</h3>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-tamtam-orange font-medium mb-2">{dish.category}</div>
                <p className="text-tamtam-gray mb-4">{dish.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-tamtam-black">{dish.price}</span>
                  <Button variant="ghost" size="sm" className="text-tamtam-green hover:text-tamtam-green/90 p-0">
                    Order <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
