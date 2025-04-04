
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
    <div className="flex flex-wrap gap-4 mt-2 text-sm text-tamtam-gray-500 border-t border-gray-100 pt-3">
      {calories && (
        <div className="flex flex-col items-center">
          <div className="font-bold text-tamtam-gray-700">{calories}</div>
          <div className="uppercase text-xs tracking-wider">CAL</div>
        </div>
      )}
      
      {protein && (
        <div className="flex flex-col items-center">
          <div className="font-bold text-tamtam-gray-700">{protein}g</div>
          <div className="uppercase text-xs tracking-wider">PROTEIN</div>
        </div>
      )}
      
      {carbs && (
        <div className="flex flex-col items-center">
          <div className="font-bold text-tamtam-gray-700">{carbs}g</div>
          <div className="uppercase text-xs tracking-wider">CARBS</div>
        </div>
      )}
      
      {fat && (
        <div className="flex flex-col items-center">
          <div className="font-bold text-tamtam-gray-700">{fat}g</div>
          <div className="uppercase text-xs tracking-wider">FAT</div>
        </div>
      )}
      
      {sugar && (
        <div className="flex flex-col items-center">
          <div className="font-bold text-tamtam-gray-700">{sugar}g</div>
          <div className="uppercase text-xs tracking-wider">SUGAR</div>
        </div>
      )}
      
      {co2e && (
        <div className="flex flex-col items-center ml-auto">
          <div className="font-bold text-tamtam-green-600">{co2e}</div>
          <div className="uppercase text-xs tracking-wider text-tamtam-green-600">CO2e</div>
        </div>
      )}
    </div>
  );
};

export default NutritionInfo;
