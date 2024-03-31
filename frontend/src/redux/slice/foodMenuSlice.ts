import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockAPI from "../../utils/api";

interface FoodMenuState {
  isLoading: boolean;
  foodMenu: any[]; // Adjust the array type according to your data structure
}

const initialState: FoodMenuState = {
  isLoading: false,
  foodMenu: [],
};

export const fetchMenuData = createAsyncThunk("foodMenu/fetchMenuData", async () => {
  try {
    const data = await mockAPI.fetchFoodMenuData();
    const data2 = await mockAPI.fetchPlattersData();

    console.log("caa",data,data2);
    
    const obj = {
        foodItems:data,
        _plattersData:data2
    }

    return [obj];
  } catch (error) {
    throw error;
  }
});

const foodMenuSlice = createSlice({
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
      .addCase(fetchMenuData.fulfilled, (state, action:any) => {
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
