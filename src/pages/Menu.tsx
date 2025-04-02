
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NutritionInfo from "@/components/NutritionInfo";

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
    imagePath: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
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
    imagePath: "https://images.unsplash.com/photo-1604329760661-e71dc82fd600?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
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
    fat: 12
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
    fat: 11
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
    fat: 14
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
    fat: 21
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
    fat: 9
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
    fat: 24
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
    fat: 10
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
      <main className="flex-grow">
        <div className="py-16 mb-6 bg-tamtam-light">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-greneette font-bold mb-6">
              Fresh, authentic, earth-friendly food.
            </h1>
            <div className="h-1 w-24 bg-tamtam-green mx-auto my-8"></div>
          </div>
        </div>

        <section className="container-custom mb-16">
          <h2 className="text-3xl font-greneette font-bold mb-8">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  {item.imagePath && (
                    <img 
                      src={item.imagePath} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{item.name}</h3>
                  <p className="text-tamtam-gray mb-4">{item.description}</p>
                  
                  <NutritionInfo 
                    calories={item.calories}
                    protein={item.protein}
                    carbs={item.carbs}
                    fat={item.fat}
                    sugar={item.sugar}
                    co2e={item.co2e}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-custom mb-20">
          <h2 className="text-3xl font-greneette font-bold mb-8">Our Menu</h2>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 flex justify-start gap-2 bg-transparent">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="starters" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Starters
              </TabsTrigger>
              <TabsTrigger 
                value="mains" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Main Course
              </TabsTrigger>
              <TabsTrigger 
                value="desserts" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Desserts
              </TabsTrigger>
              <TabsTrigger 
                value="drinks" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Drinks
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                {filteredItems.map((item) => (
                  <div key={item.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-xl uppercase tracking-wide">{item.name}</h3>
                        <p className="text-tamtam-gray">{item.description}</p>
                      </div>
                      <span className="font-medium">{item.price}</span>
                    </div>
                    
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
