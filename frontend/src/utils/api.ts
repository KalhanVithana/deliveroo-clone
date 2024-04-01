import { FoodMenuArr, PlattersArr } from "../constant/food";

interface PayloadObj {
  cardName: string;
  description: string;
  price: string;
  imageUrl: string;
}

const fetchData = (dataArr: PayloadObj[], delay = 1000) => {
  return new Promise<PayloadObj[]>((resolve) => {
    setTimeout(() => {
      resolve(dataArr);
    }, delay);
  });
};

const mockAPI = {
  fetchFoodMenuData: () => {
    return fetchData(FoodMenuArr);
  },
  fetchPlattersData: () => {
    return fetchData(PlattersArr);
  },
  fetchCreateyourownData: () => {
    return fetchData(PlattersArr);
  },
  fetchSaladsData: () => {
    return fetchData(PlattersArr);
  },
  fetchGymFoodData: () => {
    return fetchData(PlattersArr);
  },
  fetchHotPowerBowlsData: () => {
    return fetchData(PlattersArr);
  },
  fetchRainbowWrapssData: () => {
    return fetchData(PlattersArr);
  },
};

export default mockAPI;
