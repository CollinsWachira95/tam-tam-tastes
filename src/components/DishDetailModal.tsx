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
import { ArrowRight } from "lucide-react";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[80vh] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Image Section */}
          <div className="relative overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-semibold">
                  {dish.name}
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  {dish.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-2">
                <p className="text-xl font-bold text-tamtam-orange-600">
                  Price: ${dish.price.toFixed(2)}
                </p>
                {dish.badges && dish.badges.length > 0 && (
                  <div className="flex gap-2">
                    {dish.badges.map((badge) => (
                      <Badge key={badge}>{badge}</Badge>
                    ))}
                  </div>
                )}
                {dish.calories && (
                  <p>Calories: {dish.calories}</p>
                )}
                {dish.protein && (
                  <p>Protein: {dish.protein}g</p>
                )}
                {dish.carbs && <p>Carbs: {dish.carbs}g</p>}
                {dish.fat && <p>Fat: {dish.fat}g</p>}
              </div>
            </div>
            <Button className="w-full mt-6 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white">
              Add to Cart
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
