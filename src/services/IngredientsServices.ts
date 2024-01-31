import { API_UTILS } from '@/utils/API';
import axios from 'axios';

class InggredientsApiService {
  private static API_ENDPOINT = `${API_UTILS.ENDPOINT}`;

  static async GetAllIngredientsListQuery() {
    try {
      const response = await axios.get(`${this.API_ENDPOINT}/list.php?i=list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response.data;

      return data;
    } catch (error) {
      console.log('error : ', error);

      throw error;
    }
  }

  static async GetIngredientsQueryByFilter(ingredientName: string) {
    try {
      const response = await axios.get(
        `${this.API_ENDPOINT}/filter.php?i=${ingredientName}`,
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

export default InggredientsApiService;
