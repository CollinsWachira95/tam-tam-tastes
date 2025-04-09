
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Share2, Info, ShoppingBag } from "lucide-react";
import NutritionInfo from "@/components/NutritionInfo";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DishDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    description: string;
    price: string;
    category?: string;
    calories?: number;
    protein?: number;
    carbs?: number;
    fat?: number;
    sugar?: number;
    co2e?: string;
    featured?: boolean;
    imagePath?: string;
    badges?: string[];
    origin?: string;
    preparation?: string;
  };
}

const DishDetailModal = ({ isOpen, onClose, item }: DishDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  
  // If no item is provided, don't render anything
  if (!item) return null;
  
  const handleAddToCart = () => {
    // Add item to cart logic would go here
    onClose();
    navigate("/cart");
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden bg-white rounded-xl">
        <DialogHeader className="pt-6 px-6">
          <div className="flex justify-between items-center w-full">
            <div>
              {item.category && (
                <span className="inline-block px-3 py-1 bg-tamtam-orange-100 text-tamtam-orange-600 rounded-full text-xs font-medium mb-2">
                  {item.category}
                </span>
              )}
              <DialogTitle className="text-2xl font-playfair text-tamtam-black">
                {item.name}
              </DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full h-8 w-8 absolute right-4 top-4 hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>
        
        {item.imagePath && (
          <div className="relative w-full h-[200px] sm:h-[280px] mt-2 overflow-hidden">
            <img
              src={item.imagePath}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {item.badges && item.badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-white text-xs font-medium text-tamtam-orange-600 px-3 py-1.5 rounded-full shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 pr-4">
              <p className="text-tamtam-gray-600 mb-4 text-sm">{item.description}</p>
              
              {(item.origin || item.preparation) && (
                <div className="mb-4 space-y-3 bg-tamtam-light/50 p-3 rounded-lg">
                  {item.origin && (
                    <p className="text-xs flex items-start">
                      <span className="font-medium text-tamtam-green-600 mr-2">Origin:</span>
                      <span>{item.origin}</span>
                    </p>
                  )}
                  {item.preparation && (
                    <p className="text-xs flex items-start">
                      <span className="font-medium text-tamtam-orange-600 mr-2">Preparation:</span>
                      <span>{item.preparation}</span>
                    </p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-tamtam-orange-50 rounded-lg px-4 py-3 text-center min-w-20">
              <span className="block text-lg font-bold text-tamtam-orange-600">{item.price}</span>
              <span className="text-xs text-tamtam-gray-500">per serving</span>
            </div>
          </div>
          
          {/* Quantity selector */}
          <div className="flex items-center justify-start mb-4">
            <span className="text-sm font-medium mr-3">Quantity:</span>
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-1 text-tamtam-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-1 border-x border-gray-200 min-w-8 text-center">
                {quantity}
              </span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-1 text-tamtam-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Nutrition section - simplified for modal */}
          <div className="border-t border-gray-100 pt-4 mt-4">
            <h4 className="font-medium flex items-center mb-2 text-sm text-tamtam-gray-700">
              <Info className="h-3 w-3 mr-1 text-tamtam-gray-400" /> 
              Nutrition Information
            </h4>
            
            <div className="grid grid-cols-5 gap-2">
              {item.calories && (
                <div className="text-center text-xs">
                  <div className="font-bold text-tamtam-gray-700">{item.calories}</div>
                  <div className="uppercase text-[10px] tracking-wider text-tamtam-gray-500">CAL</div>
                </div>
              )}
              
              {item.protein && (
                <div className="text-center text-xs">
                  <div className="font-bold text-tamtam-gray-700">{item.protein}g</div>
                  <div className="uppercase text-[10px] tracking-wider text-tamtam-gray-500">PROT</div>
                </div>
              )}
              
              {item.carbs && (
                <div className="text-center text-xs">
                  <div className="font-bold text-tamtam-gray-700">{item.carbs}g</div>
                  <div className="uppercase text-[10px] tracking-wider text-tamtam-gray-500">CARBS</div>
                </div>
              )}
              
              {item.fat && (
                <div className="text-center text-xs">
                  <div className="font-bold text-tamtam-gray-700">{item.fat}g</div>
                  <div className="uppercase text-[10px] tracking-wider text-tamtam-gray-500">FAT</div>
                </div>
              )}
              
              {item.sugar && (
                <div className="text-center text-xs">
                  <div className="font-bold text-tamtam-gray-700">{item.sugar}g</div>
                  <div className="uppercase text-[10px] tracking-wider text-tamtam-gray-500">SUGAR</div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <DialogFooter className="p-4 pt-0 border-t border-gray-100 mt-2 flex-col sm:flex-row">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full mb-2 sm:mb-0 w-full sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button 
            className="bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white rounded-full w-full sm:w-auto"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DishDetailModal;
