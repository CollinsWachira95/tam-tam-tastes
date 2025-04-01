
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

const menuItems: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Samosa",
    description: "Crispy pastry filled with spiced meat or vegetables",
    price: "$6.99",
    category: "starters"
  },
  {
    id: 2,
    name: "Maharagwe",
    description: "Red kidney bean stew cooked with coconut milk and spices",
    price: "$8.99",
    category: "starters"
  },
  {
    id: 3,
    name: "Bhajia",
    description: "Spiced potato fritters served with tamarind sauce",
    price: "$7.99",
    category: "starters"
  },

  // Main Courses
  {
    id: 4,
    name: "Nyama Choma",
    description: "Grilled meat marinated in traditional Kenyan spices, served with kachumbari salad",
    price: "$18.99",
    category: "mains"
  },
  {
    id: 5,
    name: "Ugali & Sukuma Wiki",
    description: "Cornmeal porridge served with sautéed collard greens and caramelized onions",
    price: "$12.99",
    category: "mains"
  },
  {
    id: 6,
    name: "Kenyan Pilau",
    description: "Fragrant spiced rice cooked with meat, vegetables, and aromatic spices",
    price: "$15.99",
    category: "mains"
  },
  {
    id: 7,
    name: "Mukimo",
    description: "Mashed potatoes with peas, corn, and local greens",
    price: "$13.99",
    category: "mains"
  },
  {
    id: 8,
    name: "Chapati & Beef Stew",
    description: "Soft flatbread served with slow-cooked beef in a rich, spiced tomato sauce",
    price: "$16.99",
    category: "mains"
  },

  // Desserts
  {
    id: 9,
    name: "Mandazi",
    description: "East African fried bread flavored with cardamom and coconut milk",
    price: "$6.99",
    category: "desserts"
  },
  {
    id: 10,
    name: "Mahamri",
    description: "Swahili coconut donuts spiced with cardamom and served with honey",
    price: "$7.99",
    category: "desserts"
  },
  {
    id: 11,
    name: "Kenyan Chai Pudding",
    description: "Creamy pudding infused with Kenyan tea and spices",
    price: "$8.99",
    category: "desserts"
  },

  // Drinks
  {
    id: 12,
    name: "Kenyan Chai",
    description: "Traditional Kenyan tea made with milk and aromatic spices",
    price: "$4.99",
    category: "drinks"
  },
  {
    id: 13,
    name: "Tangawizi",
    description: "Refreshing ginger beer made with fresh ginger",
    price: "$5.99",
    category: "drinks"
  },
  {
    id: 14,
    name: "Dawa Cocktail",
    description: "Kenyan 'medicine' cocktail with vodka, honey, and lime",
    price: "$9.99",
    category: "drinks"
  }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-tamtam-light py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-greneette font-bold mb-6">Our Menu</h1>
            <p className="text-tamtam-gray max-w-2xl mx-auto mb-8">
              Discover the authentic flavors of Kenya through our carefully curated menu. Each dish is prepared with fresh ingredients and traditional spices.
            </p>
          </div>
        </div>

        <section className="section bg-white">
          <div className="container-custom">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-tamtam-light">
                  <TabsTrigger value="all" className="data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="starters" className="data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">
                    Starters
                  </TabsTrigger>
                  <TabsTrigger value="mains" className="data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">
                    Main Course
                  </TabsTrigger>
                  <TabsTrigger value="desserts" className="data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">
                    Desserts
                  </TabsTrigger>
                  <TabsTrigger value="drinks" className="data-[state=active]:bg-tamtam-orange data-[state=active]:text-white">
                    Drinks
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-greneette text-xl text-tamtam-black mb-1">{item.name}</h3>
                            <p className="text-tamtam-gray">{item.description}</p>
                          </div>
                          <span className="font-bold text-tamtam-orange">{item.price}</span>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm" className="text-tamtam-green hover:text-white hover:bg-tamtam-green p-1">
                            <ShoppingBag className="h-4 w-4 mr-1" />
                            Add to Order
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
