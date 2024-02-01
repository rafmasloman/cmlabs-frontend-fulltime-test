import { API_UTILS } from '@/utils/API';
import axios from 'axios';

class MealsApiService {
  private static API_ENDPOINT = `${
    process.env.NEXT_PUBLIC_API_ENDPOINT || API_UTILS.ENDPOINT
  }`;

  static async GetMealDetailQueryApi(mealId: string) {
    try {
      const response = await axios.get(
        `${this.API_ENDPOINT}/lookup.php?i=${mealId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const data = response.data;

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default MealsApiService;
