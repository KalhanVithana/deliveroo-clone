import { FoodMenuArr, PlattersArr } from "../constant/food";

const mockAPI = {
    fetchFoodMenuData: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(FoodMenuArr);
        }, 1000); 
      });
    },
   
    fetchPlattersData: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(PlattersArr);
        }, 1000);
      });
    },
  };
  
  export default mockAPI;