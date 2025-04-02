
interface NutritionInfoProps {
  calories?: number;
  protein?: number;
  carbs?: number;
  fat?: number;
  sugar?: number;
  co2e?: string;
}

const NutritionInfo = ({ calories, protein, carbs, fat, sugar, co2e }: NutritionInfoProps) => {
  if (!calories && !protein && !carbs && !fat && !sugar && !co2e) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
      {calories && (
        <div>
          <div className="font-bold">{calories}</div>
          <div className="uppercase text-xs tracking-wider">Calories</div>
        </div>
      )}
      
      {protein && (
        <div>
          <div className="font-bold">{protein}g</div>
          <div className="uppercase text-xs tracking-wider">Protein</div>
        </div>
      )}
      
      {sugar && (
        <div>
          <div className="font-bold">{sugar}g</div>
          <div className="uppercase text-xs tracking-wider">Sugar</div>
        </div>
      )}
      
      {carbs && (
        <div>
          <div className="font-bold">{carbs}g</div>
          <div className="uppercase text-xs tracking-wider">Carbs</div>
        </div>
      )}
      
      {fat && (
        <div>
          <div className="font-bold">{fat}g</div>
          <div className="uppercase text-xs tracking-wider">Fat</div>
        </div>
      )}
      
      {co2e && (
        <div>
          <div className="font-bold">{co2e}</div>
          <div className="uppercase text-xs tracking-wider">CO2e</div>
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
