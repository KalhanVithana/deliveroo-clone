import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockAPI from "../../utils/api";

interface AuthState {
  isAuthenticated: boolean;
  userInfo: any[]; // Change this to the appropriate type
}

const initialState: AuthState = {
  isAuthenticated: false,
  userInfo: [],
};

export const loginAsyncThunk = createAsyncThunk(
  "authSlice/login",
  async (userData: any) => {
    try {
     
      
      const isAuth = await mockAPI.userLogin(userData);
      console.log("cread",isAuth);
      if (isAuth) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsyncThunk.pending, (state) => {
        state.isAuthenticated = true;
      })
      .addCase(loginAsyncThunk.fulfilled, (state, action: any) => {

         console.log("addCase login",action,state);
         
         return {...state ,isAuthenticated :action.payload}
      })
      .addCase(loginAsyncThunk.rejected, (state) => {
        state.isAuthenticated = false;
      });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
