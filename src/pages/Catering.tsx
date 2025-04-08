
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CateringHero from "@/components/CateringHero";
import CateringPackages from "@/components/CateringPackages";
import CateringGallery from "@/components/CateringGallery";
import CateringForm from "@/components/CateringForm";

interface CateringMenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  featured?: boolean;
  imagePath?: string;
  badges?: string[];
}

const cateringItems: CateringMenuItem[] = [
  {
    id: 1,
    name: "Corporate Package",
    description: "Perfect for business meetings and conferences. Includes a selection of Kenyan appetizers, main dishes, and desserts.",
    price: "From $25/person",
    category: "corporate",
    calories: 450,
    protein: 22,
    carbs: 45,
    fat: 15,
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    badges: ["Popular"]
  },
  {
    id: 2,
    name: "Wedding Celebration",
    description: "A luxurious spread of authentic Kenyan cuisine to make your special day memorable. Customizable to match your theme.",
    price: "From $35/person",
    category: "weddings",
    calories: 550,
    protein: 25,
    carbs: 55,
    fat: 18,
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    badges: ["Premium"]
  },
  {
    id: 3,
    name: "Private Event Package",
    description: "Birthday parties, family reunions, and more. Our private event catering brings authentic Kenyan flavors to your celebration.",
    price: "From $30/person",
    category: "private",
    calories: 500,
    protein: 23,
    carbs: 50,
    fat: 16,
    featured: true,
    imagePath: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
    badges: ["Customizable"]
  },
  {
    id: 4,
    name: "Breakfast & Brunch",
    description: "Start your day with traditional Kenyan breakfast items like mandazi, chai tea, and egg dishes.",
    price: "From $20/person",
    category: "corporate",
    calories: 380,
    protein: 18,
    carbs: 48,
    fat: 12,
    imagePath: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
  },
  {
    id: 5,
    name: "Buffet Setup",
    description: "Elegant buffet service with chafing dishes, serving utensils, and professional staff.",
    price: "From $28/person",
    category: "weddings",
    calories: 520,
    protein: 26,
    carbs: 52,
    fat: 17,
    imagePath: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
  },
  {
    id: 6,
    name: "Cocktail Reception",
    description: "Passed appetizers and drinks perfect for networking events or pre-dinner receptions.",
    price: "From $22/person",
    category: "private",
    calories: 350,
    protein: 15,
    carbs: 30,
    fat: 20,
    imagePath: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  }
];

const galleryImages = [
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3"
];

const Catering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Video Section */}
        <CateringHero />

        {/* Catering Options */}
        <CateringPackages cateringItems={cateringItems} />

        {/* Gallery Section */}
        <CateringGallery galleryImages={galleryImages} />

        {/* Inquiry Form Section */}
        <CateringForm />

        {/* Floating Order Now Button */}
        <div className="fixed bottom-8 right-8 z-50 animate-bounce-slow">
          <Link to="/menu">
            <Button className="bg-tamtam-orange hover:bg-tamtam-orange/90 text-white px-6 py-6 h-auto rounded-full font-neutra text-base shadow-premium-hover">
              Order Now
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Catering;
