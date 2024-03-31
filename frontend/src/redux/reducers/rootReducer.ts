import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from '../slice/loginSlice'; // Example slice
import foodMenuSlice from '../slice/foodMenuSlice';

const rootReducer = combineReducers({
  auth: loginSlice,
  foodMenu: foodMenuSlice,
  // Add more reducers here
});

export default rootReducer;
