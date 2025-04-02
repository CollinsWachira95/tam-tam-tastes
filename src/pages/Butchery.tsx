
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import NutritionInfo from "@/components/NutritionInfo";

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
    imagePath: "https://images.unsplash.com/photo-1607116667981-ff148a4a458b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
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
    origin: "Western Kenya"
  },
  {
    id: 3,
    name: "Beef Samosa Mince",
    description: "Finely ground beef seasoned with Kenyan spices for making authentic samosas.",
    price: "$9.99/lb",
    category: "beef",
    calories: 220,
    protein: 22,
    fat: 14
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
    imagePath: "https://images.unsplash.com/photo-1666190053936-28af4c9f0273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1392&q=80"
  },
  {
    id: 6,
    name: "Goat Ribs",
    description: "Tender goat ribs perfect for grilling or slow cooking in stews.",
    price: "$13.99/lb",
    category: "goat",
    calories: 260,
    protein: 24,
    fat: 16
  },
  {
    id: 7,
    name: "Goat Liver (Maini)",
    description: "Fresh goat liver, a delicacy often served with ugali or rice.",
    price: "$9.99/lb",
    category: "goat",
    calories: 200,
    protein: 30,
    fat: 8
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
    imagePath: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 9,
    name: "Chicken Drumsticks",
    description: "Meaty chicken drumsticks ideal for frying or grilling.",
    price: "$8.99/lb",
    category: "chicken",
    calories: 230,
    protein: 24,
    fat: 14
  },
  {
    id: 10,
    name: "Chicken Gizzards",
    description: "Chicken gizzards, a popular protein-rich delicacy in Kenya.",
    price: "$7.99/lb",
    category: "chicken",
    calories: 190,
    protein: 28,
    fat: 8
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
    fat: 18
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
    imagePath: "https://images.unsplash.com/photo-1547050605-2f268cd5daf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 14,
    name: "Crocodile Meat",
    description: "Exotic crocodile meat, a delicacy in coastal Kenya.",
    price: "$24.99/lb",
    category: "game",
    calories: 180,
    protein: 32,
    fat: 8
  },
  {
    id: 15,
    name: "Antelope Fillet",
    description: "Premium antelope fillet, lean and rich in flavor.",
    price: "$22.99/lb",
    category: "game",
    calories: 170,
    protein: 34,
    fat: 4
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
      <main className="flex-grow">
        <div className="py-16 mb-6 bg-tamtam-light">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-greneette font-bold mb-6">
              Premium Kenyan Meats
            </h1>
            <p className="text-lg text-tamtam-gray max-w-3xl mx-auto">
              Discover our selection of locally-sourced, ethically-raised meats, 
              perfect for traditional Kenyan dishes.
            </p>
            <div className="h-1 w-24 bg-tamtam-orange mx-auto my-8"></div>
          </div>
        </div>

        <section className="container-custom mb-16">
          <h2 className="text-3xl font-greneette font-bold mb-8">Featured Meats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-64 overflow-hidden">
                  {product.imagePath && (
                    <img 
                      src={product.imagePath} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold uppercase tracking-wide">{product.name}</h3>
                    <span className="font-medium">{product.price}</span>
                  </div>
                  <p className="text-tamtam-gray mb-4">{product.description}</p>
                  
                  {product.origin && (
                    <p className="text-sm text-tamtam-green mb-2">
                      <span className="font-medium">Origin:</span> {product.origin}
                    </p>
                  )}
                  
                  {product.preparation && (
                    <p className="text-sm text-tamtam-orange mb-4">
                      <span className="font-medium">Preparation:</span> {product.preparation}
                    </p>
                  )}
                  
                  <NutritionInfo 
                    calories={product.calories}
                    protein={product.protein}
                    fat={product.fat}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container-custom mb-20">
          <h2 className="text-3xl font-greneette font-bold mb-8">Our Butchery</h2>

          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 flex justify-start gap-2 bg-transparent">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="beef" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Beef
              </TabsTrigger>
              <TabsTrigger 
                value="goat" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Goat
              </TabsTrigger>
              <TabsTrigger 
                value="chicken" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Chicken
              </TabsTrigger>
              <TabsTrigger 
                value="lamb" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Lamb
              </TabsTrigger>
              <TabsTrigger 
                value="game" 
                className="data-[state=active]:border-b-2 data-[state=active]:border-tamtam-green data-[state=active]:bg-transparent data-[state=active]:text-tamtam-black rounded-none px-1 py-2 font-medium"
              >
                Game
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-xl uppercase tracking-wide">{product.name}</h3>
                        <p className="text-tamtam-gray">{product.description}</p>
                        
                        {product.origin && (
                          <p className="text-sm text-tamtam-green mt-2">
                            <span className="font-medium">Origin:</span> {product.origin}
                          </p>
                        )}
                        
                        {product.preparation && (
                          <p className="text-sm text-tamtam-orange mt-1">
                            <span className="font-medium">Preparation:</span> {product.preparation}
                          </p>
                        )}
                      </div>
                      <span className="font-medium">{product.price}</span>
                    </div>
                    
                    <NutritionInfo 
                      calories={product.calories}
                      protein={product.protein}
                      fat={product.fat}
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

export default Butchery;
