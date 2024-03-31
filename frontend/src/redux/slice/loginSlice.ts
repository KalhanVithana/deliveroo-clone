import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  userInfo: any[]; // Change this to the appropriate type
}

const initialState: AuthState = {
  isAuthenticated: false,
  userInfo: [],
};

const authSlice = createSlice({
  name: 'login',
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
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
