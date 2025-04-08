
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import NutritionInfo from "@/components/NutritionInfo";
import DishDetailModal from "@/components/DishDetailModal";

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
  origin?: string;
  preparation?: string;
}

interface DishCardProps {
  item: MenuItem;
}

const DishCard = ({ item }: DishCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Card 
        className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300 h-full flex flex-col cursor-pointer"
        onClick={openModal}
      >
        {item.imagePath && (
          <div className="relative h-52 overflow-hidden">
            <img 
              src={item.imagePath} 
              alt={item.name}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            />
            
            {/* Price badge */}
            <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 shadow-sm font-opensans font-medium text-tamtam-orange-600">
              {item.price}
            </div>
            
            {/* Feature badges */}
            {item.badges && item.badges.length > 0 && (
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                {item.badges.map((badge, index) => (
                  <span 
                    key={index} 
                    className="bg-white text-xs font-medium text-tamtam-orange-600 px-2 py-1 rounded-full shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}
            
            {/* Gradient overlay for better contrast with text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>
        )}
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="font-playfair text-xl font-bold mb-2 tracking-tight text-tamtam-black">{item.name}</h3>
          <p className="text-tamtam-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
          
          <div className="mt-auto">
            <NutritionInfo 
              calories={item.calories}
              protein={item.protein}
              carbs={item.carbs}
              fat={item.fat}
              sugar={item.sugar}
              co2e={item.co2e}
            />
          </div>
        </CardContent>
      </Card>
      
      <DishDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={item}
      />
    </>
  );
};

export default DishCard;
