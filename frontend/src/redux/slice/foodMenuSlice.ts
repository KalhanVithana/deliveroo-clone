import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockAPI from "../../utils/api";

interface FoodMenuState {
  isLoading: boolean;
  foodMenu: any[];
}

const initialState: FoodMenuState = {
  isLoading: false,
  foodMenu: [],
};

export const fetchMenuData = createAsyncThunk(
  "foodMenu/fetchMenuData",
  async () => {
    try {
      const foodMenuDta = await mockAPI.fetchFoodMenuData();
      const plattersData = await mockAPI.fetchPlattersData();
      const createYourOwnData = await mockAPI.fetchCreateyourownData();
      const gymFoodData = await mockAPI.fetchGymFoodData();
      // const rainbowWrapsData = await mockAPI.fetchRainbowWrapssData();
      const saladsData = await mockAPI.fetchSaladsData();
      // const hotPowerBowlsData = await mockAPI.fetchHotPowerBowlsData();

      const obj = {
        foodItems: foodMenuDta,
        _plattersData: plattersData,
        createYourOwnData: createYourOwnData,
        gymFoodData: gymFoodData,
        // rainbowWrapsData: rainbowWrapsData,
        saladsData: saladsData,
        // hotPowerBowlsData: hotPowerBowlsData,
      };

      return [obj];
    } catch (error) {
      throw error;
    }
  }
);

const foodMenuSlice :any= createSlice({
  name: "foodMenu",
  initialState,
  reducers: {
    addFoodMenu(state, action: PayloadAction<any>) {
      state.foodMenu = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMenuData.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.foodMenu = action.payload;
      })
      .addCase(fetchMenuData.rejected, (state) => {
        state.isLoading = false;
        state.foodMenu = [];
      });
  },
});

export const { addFoodMenu } = foodMenuSlice.actions;
export default foodMenuSlice.reducer;
