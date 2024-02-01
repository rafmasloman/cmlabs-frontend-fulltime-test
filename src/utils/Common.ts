export const mergeIngredients = (meals: any) => {
  return Object?.keys(meals || [])
    .filter((key) => key.startsWith('strIngredient'))
    .map((key) => meals[key])
    .filter(Boolean);
};

export const mergeMeasurements = (meals: any) => {
  return Object?.keys(meals || [])
    .filter((key) => key.startsWith('strMeasure'))
    .map((key) => meals[key])
    .filter(Boolean);
};
