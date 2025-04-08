
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Share2, Info } from "lucide-react";
import NutritionInfo from "@/components/NutritionInfo";
import { cn } from "@/lib/utils";

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
  // If no item is provided, don't render anything
  if (!item) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden bg-white rounded-xl">
        <DialogHeader className="pt-6 px-6">
          <div className="flex justify-between items-center w-full">
            <div>
              {item.category && (
                <span className="inline-block px-3 py-1 bg-tamtam-orange-100 text-tamtam-orange-600 rounded-full text-xs font-medium mb-2">
                  {item.category}
                </span>
              )}
              <DialogTitle className="text-3xl font-playfair text-tamtam-black">
                {item.name}
              </DialogTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full h-8 w-8 absolute right-4 top-4"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </DialogHeader>
        
        {item.imagePath && (
          <div className="relative w-full h-[300px] sm:h-[360px] mt-4 overflow-hidden">
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
              <p className="text-tamtam-gray-600 mb-6">{item.description}</p>
              
              {(item.origin || item.preparation) && (
                <div className="mb-6 space-y-3 bg-tamtam-light/50 p-4 rounded-lg">
                  {item.origin && (
                    <p className="text-sm flex items-start">
                      <span className="font-medium text-tamtam-green-600 mr-2">Origin:</span>
                      <span>{item.origin}</span>
                    </p>
                  )}
                  {item.preparation && (
                    <p className="text-sm flex items-start">
                      <span className="font-medium text-tamtam-orange-600 mr-2">Preparation:</span>
                      <span>{item.preparation}</span>
                    </p>
                  )}
                </div>
              )}
            </div>
            
            <div className="bg-tamtam-orange-50 rounded-lg px-4 py-3 text-center min-w-24">
              <span className="block text-xl font-bold text-tamtam-orange-600">{item.price}</span>
              <span className="text-xs text-tamtam-gray-500">per serving</span>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-5 mt-6">
            <h4 className="font-medium flex items-center mb-3 text-tamtam-gray-700">
              <Info className="h-4 w-4 mr-2 text-tamtam-gray-400" /> 
              Nutrition Information
            </h4>
            
            <div className={cn(
              "px-4 py-5 bg-white border border-gray-100 rounded-lg shadow-sm",
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            )}>
              {item.calories && (
                <div className="text-center">
                  <div className="font-bold text-xl text-tamtam-gray-700">{item.calories}</div>
                  <div className="uppercase text-xs tracking-wider text-tamtam-gray-500">CALORIES</div>
                </div>
              )}
              
              {item.protein && (
                <div className="text-center">
                  <div className="font-bold text-xl text-tamtam-gray-700">{item.protein}g</div>
                  <div className="uppercase text-xs tracking-wider text-tamtam-gray-500">PROTEIN</div>
                </div>
              )}
              
              {item.carbs && (
                <div className="text-center">
                  <div className="font-bold text-xl text-tamtam-gray-700">{item.carbs}g</div>
                  <div className="uppercase text-xs tracking-wider text-tamtam-gray-500">CARBS</div>
                </div>
              )}
              
              {item.fat && (
                <div className="text-center">
                  <div className="font-bold text-xl text-tamtam-gray-700">{item.fat}g</div>
                  <div className="uppercase text-xs tracking-wider text-tamtam-gray-500">FAT</div>
                </div>
              )}
              
              {item.sugar && (
                <div className="text-center">
                  <div className="font-bold text-xl text-tamtam-gray-700">{item.sugar}g</div>
                  <div className="uppercase text-xs tracking-wider text-tamtam-gray-500">SUGAR</div>
                </div>
              )}
            </div>
            
            {item.co2e && (
              <div className="mt-3 flex items-center justify-end">
                <div className="text-center">
                  <div className="font-bold text-sm text-tamtam-green-600">{item.co2e}</div>
                  <div className="uppercase text-xs tracking-wider text-tamtam-green-600">CO2 FOOTPRINT</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <DialogFooter className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
          <Button variant="outline" size="sm" className="rounded-full">
            <Share2 className="h-4 w-4 mr-1" /> Share
          </Button>
          <Button className="bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white rounded-full px-8">
            Order Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DishDetailModal;
