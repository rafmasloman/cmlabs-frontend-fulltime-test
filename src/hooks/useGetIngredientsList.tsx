import InggredientsApiService from '@/services/IngredientsServices';
import { useEffect, useState } from 'react';

export const useGetIngredientsList = () => {
  const [ingredientsList, setIngredientsList] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await InggredientsApiService.GetAllIngredientsListQuery();

        setIngredientsList(data);
      } catch (error) {
        return error;
      }
    };

    fetchData();
  }, []);

  return { ingredientsList };
};
