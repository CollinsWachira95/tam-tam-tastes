
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NutritionInfo from "@/components/NutritionInfo";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import DishCard from "@/components/DishCard";
import MenuSection from "@/components/MenuSection";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  calories?: number;
  protein?: number;
  sugar?: number;
  carbs?: number;
  fat?: number;
  co2e?: string;
  featured?: boolean;
  imagePath?: string;
  badges?: string[];
}

const menuItems: MenuItem[] = [
  // Featured Items
  {
    id: 1,
    name: "Nyama Choma Platter",
    description: "Grilled meat marinated in traditional Kenyan spices, served with kachumbari salad",
    price: "$18.99",
    category: "mains",
    calories: 860,
    protein: 31,
    carbs: 89,
    fat: 40,
    co2e: "0.63kg",
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    badges: ["Popular", "Traditional"]
  },
  {
    id: 2,
    name: "Ugali & Sukuma Wiki",
    description: "Cornmeal porridge served with sautéed collard greens and caramelized onions",
    price: "$12.99",
    category: "mains",
    calories: 470,
    protein: 12,
    carbs: 65,
    fat: 18,
    co2e: "0.41kg", 
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1604329760661-e71dc82fd600?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    badges: ["Vegetarian"]
  },
  {
    id: 15,
    name: "Kenyan Curry Bowl",
    description: "Aromatic vegetable curry with coconut milk, served with fragrant basmati rice",
    price: "$14.99",
    category: "mains",
    calories: 520,
    protein: 14,
    carbs: 72,
    fat: 16,
    co2e: "0.39kg",
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1631292784640-2b24be591e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
    badges: ["Vegan"]
  },
  
  // Starters
  {
    id: 3,
    name: "Samosa",
    description: "Crispy pastry filled with spiced meat or vegetables",
    price: "$6.99",
    category: "starters",
    calories: 240,
    protein: 8,
    sugar: 2,
    carbs: 32,
    fat: 12,
    badges: ["Vegetarian option"]
  },
  {
    id: 4,
    name: "Maharagwe",
    description: "Red kidney bean stew cooked with coconut milk and spices",
    price: "$8.99",
    category: "starters",
    calories: 320,
    protein: 15,
    sugar: 3,
    carbs: 45,
    fat: 11,
    badges: ["Vegan"]
  },
  {
    id: 5,
    name: "Bhajia",
    description: "Spiced potato fritters served with tamarind sauce",
    price: "$7.99",
    category: "starters",
    calories: 290,
    protein: 4,
    sugar: 1,
    carbs: 38,
    fat: 14,
    badges: ["Vegetarian"]
  },

  // Main Courses
  {
    id: 6,
    name: "Kenyan Pilau",
    description: "Fragrant spiced rice cooked with meat, vegetables, and aromatic spices",
    price: "$15.99",
    category: "mains",
    calories: 630,
    protein: 28,
    carbs: 76,
    fat: 21,
    imagePath: "https://images.unsplash.com/photo-1596797038530-2c107aa4020e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2532&q=80",
  },
  {
    id: 7,
    name: "Mukimo",
    description: "Mashed potatoes with peas, corn, and local greens",
    price: "$13.99",
    category: "mains",
    calories: 420,
    protein: 10,
    carbs: 72,
    fat: 9,
    badges: ["Vegetarian"]
  },
  {
    id: 8,
    name: "Chapati & Beef Stew",
    description: "Soft flatbread served with slow-cooked beef in a rich, spiced tomato sauce",
    price: "$16.99",
    category: "mains",
    calories: 580,
    protein: 35,
    carbs: 58,
    fat: 24,
    imagePath: "https://images.unsplash.com/photo-1512058533999-555f6fe88caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },

  // Desserts
  {
    id: 9,
    name: "Mandazi",
    description: "East African fried bread flavored with cardamom and coconut milk",
    price: "$6.99",
    category: "desserts",
    calories: 280,
    protein: 5,
    sugar: 13,
    carbs: 42,
    fat: 10,
    imagePath: "https://images.unsplash.com/photo-1562618803-7dffa6e8c9a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1909&q=80",
  },
  {
    id: 10,
    name: "Mahamri",
    description: "Swahili coconut donuts spiced with cardamom and served with honey",
    price: "$7.99",
    category: "desserts",
    calories: 310,
    protein: 4,
    sugar: 18,
    carbs: 46,
    fat: 12
  },
  {
    id: 11,
    name: "Kenyan Chai Pudding",
    description: "Creamy pudding infused with Kenyan tea and spices",
    price: "$8.99",
    category: "desserts",
    calories: 350,
    protein: 6,
    sugar: 22,
    carbs: 48,
    fat: 14
  },

  // Drinks
  {
    id: 12,
    name: "Kenyan Chai",
    description: "Traditional Kenyan tea made with milk and aromatic spices",
    price: "$4.99",
    category: "drinks",
    calories: 120,
    protein: 3,
    sugar: 8,
    carbs: 14,
    fat: 5
  },
  {
    id: 13,
    name: "Tangawizi",
    description: "Refreshing ginger beer made with fresh ginger",
    price: "$5.99",
    category: "drinks",
    calories: 180,
    protein: 0,
    sugar: 28,
    carbs: 32,
    fat: 0
  },
  {
    id: 14,
    name: "Dawa Cocktail",
    description: "Kenyan 'medicine' cocktail with vodka, honey, and lime",
    price: "$9.99",
    category: "drinks",
    calories: 220,
    protein: 0,
    sugar: 24,
    carbs: 26,
    fat: 0
  }
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeTab);
    
  const featuredItems = menuItems.filter(item => item.featured);

  return (
    <div className="min-h-screen flex flex-col bg-tamtam-light">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-tamtam-orange-50 to-tamtam-light overflow-hidden">
        <div className="absolute inset-0 kenyan-texture opacity-20"></div>
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 tracking-tight text-tamtam-black">
            Fresh, authentic, earth-friendly food.
          </h1>
          <div className="h-1 w-32 bg-tamtam-orange-600 mx-auto my-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-tamtam-gray-600 max-w-3xl mx-auto font-opensans">
            Our menu celebrates Kenya's rich culinary traditions with dishes crafted from locally sourced ingredients and time-honored recipes.
          </p>
        </div>
      </section>
      
      {/* Floating Order Button */}
      <div className="fixed right-6 bottom-12 z-50">
        <Button className="bg-gradient-to-r from-tamtam-orange-600 to-tamtam-orange-700 hover:from-tamtam-orange-700 hover:to-tamtam-orange-800 text-white font-opensans font-medium rounded-full shadow-premium-hover transform transition-all hover:scale-105">
          <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
        </Button>
      </div>

      <main className="flex-grow pb-20">
        {/* Featured Section */}
        <MenuSection title="Featured Dishes" description="Our most popular dishes and seasonal favorites">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        </MenuSection>

        {/* Menu Categories */}
        <section className="container-custom my-16">
          <h2 className="text-3xl font-playfair font-bold mb-8 tracking-tight">Our Menu</h2>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-gray-200 mb-8">
              <TabsList className="flex justify-start -mb-px bg-transparent overflow-x-auto">
                {['all', 'starters', 'mains', 'desserts', 'drinks'].map((category) => (
                  <TabsTrigger 
                    key={category}
                    value={category} 
                    className="uppercase tracking-wide font-opensans font-semibold px-6 py-3 border-b-2 border-transparent data-[state=active]:border-tamtam-orange-600 data-[state=active]:bg-transparent data-[state=active]:text-tamtam-orange-600 text-tamtam-gray-500 rounded-none hover:text-tamtam-black transition-colors"
                  >
                    {category === 'all' ? 'All' : 
                     category === 'starters' ? 'Starters' :
                     category === 'mains' ? 'Protein Plates' :
                     category === 'desserts' ? 'Desserts' : 'Drinks'}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {filteredItems.map((item) => (
                  <div key={item.id} className="flex flex-col">
                    {item.imagePath && (
                      <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                        <img 
                          src={item.imagePath} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                        {item.badges && item.badges.length > 0 && (
                          <div className="absolute top-3 right-3">
                            {item.badges.map((badge, index) => (
                              <span 
                                key={index} 
                                className="ml-2 inline-block bg-white text-xs font-medium text-tamtam-orange-600 px-2 py-1 rounded-full shadow-sm"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-playfair font-bold text-xl tracking-tight">{item.name}</h3>
                      <span className="font-medium text-tamtam-orange-600">{item.price}</span>
                    </div>
                    
                    <p className="text-tamtam-gray-600 text-sm mb-3 flex-grow">{item.description}</p>
                    
                    <NutritionInfo 
                      calories={item.calories}
                      protein={item.protein}
                      carbs={item.carbs}
                      fat={item.fat}
                      sugar={item.sugar}
                      co2e={item.co2e}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
