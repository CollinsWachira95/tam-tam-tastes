
import { useState, useEffect } from "react";
import { Calculator, PlusCircle, MinusCircle, Salad, Banana, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ErrorBoundary } from "./ui/error-boundary";

interface NutritionItem {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
  servingSize: string;
  category: string;
}

interface NutritionCalculatorProps {
  items: NutritionItem[];
}

export function NutritionCalculator({ items = [] }: NutritionCalculatorProps) {
  const [selectedItems, setSelectedItems] = useState<Array<{ item: NutritionItem; quantity: number }>>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<NutritionItem[]>(items);
  
  // Filter items when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredItems(items);
    } else {
      const lowercaseSearch = searchTerm.toLowerCase();
      setFilteredItems(
        items.filter(item => 
          item.name.toLowerCase().includes(lowercaseSearch) ||
          item.category.toLowerCase().includes(lowercaseSearch)
        )
      );
    }
  }, [searchTerm, items]);
  
  // Add item to selected items
  const addItem = (item: NutritionItem) => {
    setSelectedItems(prev => {
      const existingItemIndex = prev.findIndex(i => i.item.id === item.id);
      
      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex] = {
          ...newItems[existingItemIndex],
          quantity: newItems[existingItemIndex].quantity + 1
        };
        return newItems;
      }
      
      return [...prev, { item, quantity: 1 }];
    });
  };
  
  // Update item quantity
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    setSelectedItems(prev =>
      prev.map(i => 
        i.item.id === id ? { ...i, quantity: newQuantity } : i
      )
    );
  };
  
  // Remove item from selected items
  const removeItem = (id: string) => {
    setSelectedItems(prev => prev.filter(i => i.item.id !== id));
  };
  
  // Clear all selected items
  const clearAll = () => {
    setSelectedItems([]);
  };
  
  // Calculate totals
  const totals = selectedItems.reduce(
    (acc, { item, quantity }) => {
      acc.calories += item.calories * quantity;
      acc.protein += item.protein * quantity;
      acc.carbs += item.carbs * quantity;
      acc.fat += item.fat * quantity;
      acc.fiber += item.fiber * quantity;
      acc.sugar += item.sugar * quantity;
      acc.sodium += item.sodium * quantity;
      return acc;
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0, sugar: 0, sodium: 0 }
  );
  
  // Calculate percentages based on daily values
  const getDailyValuePercentage = (nutrient: keyof typeof totals, value: number) => {
    const dailyValues = {
      calories: 2000,
      protein: 50,
      carbs: 275,
      fat: 78,
      fiber: 28,
      sugar: 50,
      sodium: 2300,
    };
    
    return Math.round((value / dailyValues[nutrient]) * 100);
  };
  
  return (
    <ErrorBoundary>
      <div className="w-full max-w-3xl mx-auto">
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center text-2xl">
                  <Calculator className="mr-2 h-5 w-5 text-tamtam-orange-600" />
                  Nutrition Calculator
                </CardTitle>
                <CardDescription>
                  Calculate the nutritional information for your meal
                </CardDescription>
              </div>
              {selectedItems.length > 0 && (
                <Button variant="outline" size="sm" onClick={clearAll}>
                  Clear All
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {selectedItems.length === 0 ? (
              <div className="text-center py-8">
                <Salad className="h-12 w-12 mx-auto text-muted-foreground opacity-50 mb-3" />
                <h3 className="text-lg font-medium mb-2">Your meal is empty</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6">
                  Add items from our menu to calculate their combined nutritional value
                </p>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Menu Items
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-0" align="center">
                    <div className="p-4 border-b">
                      <div className="font-medium">Menu Items</div>
                      <p className="text-sm text-muted-foreground">
                        Search and add items to your meal
                      </p>
                    </div>
                    <div className="p-4 border-b">
                      <Input
                        placeholder="Search items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mb-2"
                      />
                    </div>
                    <ScrollArea className="h-[300px]">
                      <div className="p-4">
                        {filteredItems.length === 0 ? (
                          <div className="text-center py-8">
                            <p className="text-muted-foreground">No items found</p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {filteredItems.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer"
                                onClick={() => addItem(item)}
                              >
                                <div>
                                  <div className="font-medium">{item.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {item.calories} cal | {item.servingSize}
                                  </div>
                                </div>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <PlusCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </ScrollArea>
                  </PopoverContent>
                </Popover>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead className="w-[100px] text-center">Qty</TableHead>
                        <TableHead className="w-[100px] text-right">Calories</TableHead>
                        <TableHead className="w-[80px] text-right max-sm:hidden">
                          Protein
                        </TableHead>
                        <TableHead className="w-[50px] text-center">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedItems.map(({ item, quantity }) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {item.servingSize}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <div className="flex items-center justify-center">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, quantity - 1)}
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => updateQuantity(item.id, quantity + 1)}
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            {item.calories * quantity}
                          </TableCell>
                          <TableCell className="text-right max-sm:hidden">
                            {item.protein * quantity}g
                          </TableCell>
                          <TableCell className="text-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex justify-end">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add More Items
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[400px] p-0" align="end">
                      <div className="p-4 border-b">
                        <div className="font-medium">Menu Items</div>
                        <p className="text-sm text-muted-foreground">
                          Search and add items to your meal
                        </p>
                      </div>
                      <div className="p-4 border-b">
                        <Input
                          placeholder="Search items..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="mb-2"
                        />
                      </div>
                      <ScrollArea className="h-[300px]">
                        <div className="p-4">
                          {filteredItems.length === 0 ? (
                            <div className="text-center py-8">
                              <p className="text-muted-foreground">No items found</p>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {filteredItems.map((item) => (
                                <div
                                  key={item.id}
                                  className="flex items-center justify-between p-2 hover:bg-muted rounded-md cursor-pointer"
                                  onClick={() => addItem(item)}
                                >
                                  <div>
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                      {item.calories} cal | {item.servingSize}
                                    </div>
                                  </div>
                                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                    <PlusCircle className="h-4 w-4" />
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                    </PopoverContent>
                  </Popover>
                </div>
                
                <Card className="border-2 border-muted bg-muted/20">
                  <CardHeader className="p-4 pb-0">
                    <CardTitle className="text-lg">Nutritional Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="font-semibold">Total Calories</div>
                        <div className="text-xl font-bold">{totals.calories}</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>Protein</span>
                          <Badge variant="outline" className="h-6">
                            {getDailyValuePercentage("protein", totals.protein)}% DV
                          </Badge>
                        </div>
                        <div className="font-medium">{totals.protein}g</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>Carbohydrates</span>
                          <Badge variant="outline" className="h-6">
                            {getDailyValuePercentage("carbs", totals.carbs)}% DV
                          </Badge>
                        </div>
                        <div className="font-medium">{totals.carbs}g</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span>Fat</span>
                          <Badge variant="outline" className="h-6">
                            {getDailyValuePercentage("fat", totals.fat)}% DV
                          </Badge>
                        </div>
                        <div className="font-medium">{totals.fat}g</div>
                      </div>
                      
                      <Separator className="my-2" />
                      
                      <div className="flex justify-between items-center">
                        <span>Fiber</span>
                        <div className="font-medium">{totals.fiber}g</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Sugar</span>
                        <div className="font-medium">{totals.sugar}g</div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span>Sodium</span>
                        <div className="font-medium">{totals.sodium}mg</div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                    *Daily values (DV) are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                  </CardFooter>
                </Card>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between flex-col sm:flex-row gap-2 bg-muted/30 py-4 border-t text-xs text-muted-foreground">
            <div>
              <Banana className="inline-block h-4 w-4 mr-1" />
              Nutritional information is approximate and may vary.
            </div>
            <div>
              Updated: {new Date().toLocaleDateString()}
            </div>
          </CardFooter>
        </Card>
      </div>
    </ErrorBoundary>
  );
}
