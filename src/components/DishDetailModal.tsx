
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, UtensilsCrossed, Clock, Tag } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: string | number;
  imagePath: string;
  category: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  badges?: string[];
}

interface DishDetailModalProps {
  dish: Dish;
  children: React.ReactNode;
}

export function DishDetailModal({ dish, children }: DishDetailModalProps) {
  // Convert price to string if it's a number
  const priceDisplay = typeof dish.price === 'number' ? `$${dish.price.toFixed(2)}` : dish.price;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative h-[300px] md:h-full overflow-hidden">
            <img
              src={dish.imagePath}
              alt={dish.name}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-tamtam-orange-600 backdrop-blur-sm">
                {dish.category}
              </Badge>
            </div>
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-tamtam-black font-sweetsans">
                  {dish.name}
                </DialogTitle>
                <DialogDescription className="text-base text-gray-600 mt-2 leading-relaxed">
                  {dish.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-tamtam-orange-600">
                    {priceDisplay}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>15-20 min</span>
                  </div>
                </div>

                {dish.badges && dish.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {dish.badges.map((badge) => (
                      <Badge 
                        key={badge} 
                        variant="outline"
                        className="bg-tamtam-orange-50 text-tamtam-orange-600 border-tamtam-orange-200"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}

                {(dish.calories || dish.protein || dish.carbs || dish.fat) && (
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <h4 className="font-medium text-gray-700 flex items-center">
                      <UtensilsCrossed className="w-4 h-4 mr-2" />
                      Nutritional Information
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      {dish.calories && (
                        <div>
                          <span className="text-gray-500">Calories:</span>
                          <span className="ml-2 font-medium">{dish.calories}</span>
                        </div>
                      )}
                      {dish.protein && (
                        <div>
                          <span className="text-gray-500">Protein:</span>
                          <span className="ml-2 font-medium">{dish.protein}g</span>
                        </div>
                      )}
                      {dish.carbs && (
                        <div>
                          <span className="text-gray-500">Carbs:</span>
                          <span className="ml-2 font-medium">{dish.carbs}g</span>
                        </div>
                      )}
                      {dish.fat && (
                        <div>
                          <span className="text-gray-500">Fat:</span>
                          <span className="ml-2 font-medium">{dish.fat}g</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Button 
              className="w-full mt-6 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white font-medium text-lg py-6"
            >
              Add to Cart
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DishDetailModal;
