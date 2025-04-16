
import { useState, useEffect } from "react";
import { Search, X, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

// Diet types
const DIET_TYPES = [
  { id: "vegetarian", label: "Vegetarian" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten Free" },
  { id: "dairy-free", label: "Dairy Free" },
  { id: "nut-free", label: "Nut Free" },
];

// Spice levels
const SPICE_LEVELS = [
  { id: "mild", label: "Mild" },
  { id: "medium", label: "Medium" },
  { id: "hot", label: "Hot" },
  { id: "extra-hot", label: "Extra Hot" },
];

// Meal types
const MEAL_TYPES = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "dessert", label: "Dessert" },
  { id: "beverage", label: "Beverages" },
];

export type FilterOptions = {
  search: string;
  categories: string[];
  dietTypes: string[];
  spiceLevels: string[];
  mealTypes: string[];
  priceRange: [number, number];
};

type MenuFilterProps = {
  onFilterChange: (filters: FilterOptions) => void;
  categories: { id: string; name: string }[];
  isLoading?: boolean;
  initialFilters?: Partial<FilterOptions>;
  priceRange?: [number, number];
  maxPrice?: number;
};

export function MenuFilter({
  onFilterChange,
  categories = [],
  isLoading = false,
  initialFilters = {},
  priceRange = [0, 100],
  maxPrice = 100,
}: MenuFilterProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    categories: [],
    dietTypes: [],
    spiceLevels: [],
    mealTypes: [],
    priceRange: [0, maxPrice],
    ...initialFilters,
  });

  const [activeFilterCount, setActiveFilterCount] = useState(0);

  // Update active filter count
  useEffect(() => {
    const count = 
      filters.categories.length + 
      filters.dietTypes.length + 
      filters.spiceLevels.length + 
      filters.mealTypes.length +
      (filters.search ? 1 : 0) +
      ((filters.priceRange[0] > 0 || filters.priceRange[1] < maxPrice) ? 1 : 0);
    
    setActiveFilterCount(count);
  }, [filters, maxPrice]);

  // Notify parent of filter changes
  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  // Toggle a filter value
  const toggleFilter = (type: keyof FilterOptions, value: string) => {
    setFilters(prev => {
      const current = prev[type] as string[];
      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter(item => item !== value)
          : [...current, value],
      };
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      search: "",
      categories: [],
      dietTypes: [],
      spiceLevels: [],
      mealTypes: [],
      priceRange: [0, maxPrice],
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-4 mb-8 sticky top-20 z-10">
      <div className="flex flex-col space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search dishes..."
            className="pl-10 pr-10"
            value={filters.search}
            onChange={e => setFilters({ ...filters, search: e.target.value })}
          />
          {filters.search && (
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setFilters({ ...filters, search: "" })}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 items-center">
          {/* Category Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                Categories
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Categories</h4>
                <div className="h-px bg-gray-200 my-2"></div>
                {isLoading ? (
                  <div className="flex justify-center p-2">
                    <Spinner size="sm" />
                  </div>
                ) : (
                  categories.map(category => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={filters.categories.includes(category.id)}
                        onCheckedChange={() => toggleFilter('categories', category.id)}
                      />
                      <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                    </div>
                  ))
                )}
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Diet Type Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                Dietary
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Dietary Restrictions</h4>
                <div className="h-px bg-gray-200 my-2"></div>
                {DIET_TYPES.map(diet => (
                  <div key={diet.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`diet-${diet.id}`}
                      checked={filters.dietTypes.includes(diet.id)}
                      onCheckedChange={() => toggleFilter('dietTypes', diet.id)}
                    />
                    <Label htmlFor={`diet-${diet.id}`}>{diet.label}</Label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Spice Level Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                Spice Level
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Spice Level</h4>
                <div className="h-px bg-gray-200 my-2"></div>
                {SPICE_LEVELS.map(spice => (
                  <div key={spice.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`spice-${spice.id}`}
                      checked={filters.spiceLevels.includes(spice.id)}
                      onCheckedChange={() => toggleFilter('spiceLevels', spice.id)}
                    />
                    <Label htmlFor={`spice-${spice.id}`}>{spice.label}</Label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          {/* Meal Type Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9">
                Meal Type
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-60 p-4">
              <div className="space-y-2">
                <h4 className="font-medium">Meal Type</h4>
                <div className="h-px bg-gray-200 my-2"></div>
                {MEAL_TYPES.map(meal => (
                  <div key={meal.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`meal-${meal.id}`}
                      checked={filters.mealTypes.includes(meal.id)}
                      onCheckedChange={() => toggleFilter('mealTypes', meal.id)}
                    />
                    <Label htmlFor={`meal-${meal.id}`}>{meal.label}</Label>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          {/* More Filters Button */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 ml-auto">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
                {activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-2">{activeFilterCount}</Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Active Filters</h4>
                  <Button variant="ghost" size="sm" onClick={resetFilters}>
                    Reset All
                  </Button>
                </div>
                <div className="h-px bg-gray-200"></div>
                
                {/* Display active filters as badges */}
                <div className="flex flex-wrap gap-2">
                  {filters.search && (
                    <Badge variant="outline" className="py-1">
                      Search: {filters.search}
                      <button className="ml-1" onClick={() => setFilters({ ...filters, search: "" })}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  
                  {filters.categories.map(catId => {
                    const category = categories.find(c => c.id === catId);
                    return (
                      <Badge key={catId} variant="outline" className="py-1">
                        {category?.name || catId}
                        <button className="ml-1" onClick={() => toggleFilter('categories', catId)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}
                  
                  {filters.dietTypes.map(dietId => {
                    const diet = DIET_TYPES.find(d => d.id === dietId);
                    return (
                      <Badge key={dietId} variant="outline" className="py-1">
                        {diet?.label || dietId}
                        <button className="ml-1" onClick={() => toggleFilter('dietTypes', dietId)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}
                  
                  {filters.spiceLevels.map(spiceId => {
                    const spice = SPICE_LEVELS.find(s => s.id === spiceId);
                    return (
                      <Badge key={spiceId} variant="outline" className="py-1">
                        {spice?.label || spiceId}
                        <button className="ml-1" onClick={() => toggleFilter('spiceLevels', spiceId)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}
                  
                  {filters.mealTypes.map(mealId => {
                    const meal = MEAL_TYPES.find(m => m.id === mealId);
                    return (
                      <Badge key={mealId} variant="outline" className="py-1">
                        {meal?.label || mealId}
                        <button className="ml-1" onClick={() => toggleFilter('mealTypes', mealId)}>
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
