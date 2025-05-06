
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DishCard from "@/components/DishCard";
import MenuSection from "@/components/MenuSection";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface MeatProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  calories?: number;
  protein?: number;
  fat?: number;
  imagePath?: string;
  origin?: string;
  preparation?: string;
  featured?: boolean;
  badges?: string[];
}

const meatProducts: MeatProduct[] = [
  // Beef Products
  {
    id: 1,
    name: "Nyama Choma (Beef)",
    description: "Premium beef cuts perfect for traditional Kenyan barbecue. Locally sourced and grass-fed.",
    price: "$12.99/lb",
    category: "beef",
    calories: 280,
    protein: 26,
    fat: 18,
    origin: "Central Kenya",
    preparation: "Marinate with salt, pepper, and Kenyan spices before grilling.",
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1607116667981-ff148a4a458b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    badges: ["Premium", "Grass-fed"]
  },
  {
    id: 2,
    name: "Beef Sukuma Wiki",
    description: "Tender beef strips ideal for cooking with collard greens (sukuma wiki).",
    price: "$11.49/lb",
    category: "beef",
    calories: 250,
    protein: 24,
    fat: 16,
    origin: "Western Kenya",
    badges: ["Local"]
  },
  {
    id: 3,
    name: "Beef Samosa Mince",
    description: "Finely ground beef seasoned with Kenyan spices for making authentic samosas.",
    price: "$9.99/lb",
    category: "beef",
    calories: 220,
    protein: 22,
    fat: 14,
    badges: ["Lean"]
  },
  {
    id: 4,
    name: "Beef Bones (Soup)",
    description: "Marrow-rich beef bones perfect for traditional Kenyan soups and broths.",
    price: "$5.99/lb",
    category: "beef",
    calories: 150,
    protein: 12,
    fat: 10
  },

  // Goat Products
  {
    id: 5,
    name: "Mbuzi (Goat Meat)",
    description: "Premium goat meat, a staple in Kenyan celebrations and gatherings.",
    price: "$14.99/lb",
    category: "goat",
    calories: 240,
    protein: 28,
    fat: 14,
    origin: "Rift Valley",
    preparation: "Slow cook with onions, tomatoes, and traditional spices.",
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1666190053936-28af4c9f0273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1392&q=80",
    badges: ["Premium", "Lean"]
  },
  {
    id: 6,
    name: "Goat Ribs",
    description: "Tender goat ribs perfect for grilling or slow cooking in stews.",
    price: "$13.99/lb",
    category: "goat",
    calories: 260,
    protein: 24,
    fat: 16,
    imagePath: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
    badges: ["BBQ Favorite"]
  },
  {
    id: 7,
    name: "Goat Liver (Maini)",
    description: "Fresh goat liver, a delicacy often served with ugali or rice.",
    price: "$9.99/lb",
    category: "goat",
    calories: 200,
    protein: 30,
    fat: 8,
    badges: ["Iron-rich", "Fresh Daily"]
  },

  // Chicken Products
  {
    id: 8,
    name: "Kuku (Whole Chicken)",
    description: "Free-range whole chicken raised in traditional Kenyan farms.",
    price: "$9.99/lb",
    category: "chicken",
    calories: 210,
    protein: 26,
    fat: 12,
    origin: "Eastern Kenya",
    preparation: "Perfect for Kenyan-style roasting or soup.",
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    badges: ["Free-range"]
  },
  {
    id: 9,
    name: "Chicken Drumsticks",
    description: "Meaty chicken drumsticks ideal for frying or grilling.",
    price: "$8.99/lb",
    category: "chicken",
    calories: 230,
    protein: 24,
    fat: 14,
    imagePath: "https://images.unsplash.com/photo-1626082911517-8d7f7b2d563b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    badges: ["Family Pack Available"]
  },
  {
    id: 10,
    name: "Chicken Gizzards",
    description: "Chicken gizzards, a popular protein-rich delicacy in Kenya.",
    price: "$7.99/lb",
    category: "chicken",
    calories: 190,
    protein: 28,
    fat: 8,
    badges: ["Traditional"]
  },

  // Lamb Products
  {
    id: 11,
    name: "Lamb Chops",
    description: "Tender lamb chops from locally raised sheep, perfect for grilling.",
    price: "$15.99/lb",
    category: "lamb",
    calories: 270,
    protein: 24,
    fat: 18,
    imagePath: "https://images.unsplash.com/photo-1608039790184-f1c9294d65c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    badges: ["Premium"]
  },
  {
    id: 12,
    name: "Ground Lamb",
    description: "Ground lamb meat for making kebabs and other traditional dishes.",
    price: "$12.99/lb",
    category: "lamb",
    calories: 250,
    protein: 22,
    fat: 16
  },

  // Game Meat
  {
    id: 13,
    name: "Ostrich Meat",
    description: "Lean ostrich meat, a specialty protein source in Kenya.",
    price: "$18.99/lb",
    category: "game",
    calories: 160,
    protein: 30,
    fat: 6,
    origin: "Naivasha Region",
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1547050605-2f268cd5daf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    badges: ["Specialty", "Low-fat"]
  },
  {
    id: 14,
    name: "Crocodile Meat",
    description: "Exotic crocodile meat, a delicacy in coastal Kenya.",
    price: "$24.99/lb",
    category: "game",
    calories: 180,
    protein: 32,
    fat: 8,
    badges: ["Exotic", "Limited Stock"]
  },
  {
    id: 15,
    name: "Antelope Fillet",
    description: "Premium antelope fillet, lean and rich in flavor.",
    price: "$22.99/lb",
    category: "game",
    calories: 170,
    protein: 34,
    fat: 4,
    imagePath: "https://images.unsplash.com/photo-1562059839-28689cdb3394?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    badges: ["Premium", "Lean"]
  }
];

const Butchery = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? meatProducts 
    : meatProducts.filter(product => product.category === activeTab);
    
  const featuredProducts = meatProducts.filter(product => product.featured);

  return (
    <div className="min-h-screen flex flex-col bg-tamtam-light">
      <Navbar />
      
      {/* Hero Section - Updated with orange ombre background */}
      <section className="relative py-20 bg-gradient-to-b from-tamtam-orange-400 via-tamtam-orange-200 to-tamtam-light overflow-hidden">
        <div className="absolute inset-0 kenyan-texture opacity-20"></div>
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 tracking-tight text-white">
            Premium Kenyan Meats
          </h1>
          <div className="h-1 w-32 bg-white mx-auto my-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto font-playfair">
            Discover our selection of locally-sourced, ethically-raised meats, perfect for traditional Kenyan dishes.
          </p>
        </div>
      </section>
      
      {/* Floating Order Button */}
      <div className="fixed right-6 bottom-12 z-50">
        <Button className="bg-gradient-to-r from-tamtam-orange-600 to-tamtam-orange-700 hover:from-tamtam-orange-700 hover:to-tamtam-orange-800 text-white font-playfair font-medium rounded-full shadow-premium-hover transform transition-all hover:scale-105">
          <ShoppingBag className="mr-2 h-5 w-5" /> Order Now
        </Button>
      </div>
      
      <main className="flex-grow pb-20">
        {/* Featured Section */}
        <MenuSection title="Featured Meats" description="Our premium selection of locally-sourced, ethically-raised meats">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        </MenuSection>

        {/* Menu Categories */}
        <section className="container-custom my-16">
          <h2 className="text-3xl font-playfair font-bold mb-8 tracking-tight">Our Butchery</h2>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="border-b border-gray-200 mb-8">
              <TabsList className="flex justify-start -mb-px bg-transparent overflow-x-auto">
                {['all', 'beef', 'goat', 'chicken', 'lamb', 'game'].map((category) => (
                  <TabsTrigger 
                    key={category}
                    value={category} 
                    className="uppercase tracking-wide font-playfair font-semibold px-6 py-3 border-b-2 border-transparent data-[state=active]:border-tamtam-orange-600 data-[state=active]:bg-transparent data-[state=active]:text-tamtam-orange-600 text-tamtam-gray-500 rounded-none hover:text-tamtam-black transition-colors"
                  >
                    {category === 'all' ? 'All Meats' : 
                     category === 'beef' ? 'Beef' :
                     category === 'goat' ? 'Goat' :
                     category === 'chicken' ? 'Chicken' :
                     category === 'lamb' ? 'Lamb' : 'Game'}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((item) => (
                  <DishCard key={item.id} item={item} />
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

export default Butchery;
