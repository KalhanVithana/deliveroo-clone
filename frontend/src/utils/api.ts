import { FoodMenuArr, GymFoodArr, PlattersArr, SaladsARr, createUrOwnArr } from "../constant/food";
import { userInfoArr } from "../constant/user";

interface PayloadObj {
  cardName: string;
  description: string;
  price: string;
  imageUrl: string;
}
interface PayloadUserObj {
  email: string;
  password: string;
}

const fetchData = (dataArr: PayloadObj[], delay = 1000) => {
  return new Promise<PayloadObj[]>((resolve) => {
    setTimeout(() => {
      resolve(dataArr);
    }, delay);
  });
};

const userAuth = (userData:any) => {
  return new Promise<any>((resolve) => {
    userInfoArr.filter((item:any) => {
      return item.email === userData.email;
    }).find((item => item))
    console.log(userData,userInfoArr);
    
    const isAuth = userInfoArr.filter((item:any) => {
      console.log(item.email ,userData.email);
      
      return item.email === userData.email;
    }).some((user:any) => {
       console.log(user.password , userData.password);
      return user.password === userData.password
    });
     if(isAuth){
      resolve(isAuth)
     }else {
      resolve(isAuth)
     }
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
    return fetchData(createUrOwnArr);
  },
  fetchSaladsData: () => {
    return fetchData(SaladsARr);
  },
  fetchGymFoodData: () => {
    return fetchData(GymFoodArr);
  },
  
  userLogin: (userData: PayloadUserObj) => {
    return userAuth(userData);
  }

  // fetchRainbowWrapssData: () => {
  //   return fetchData(PlattersArr);
  // },
};

export default mockAPI;
