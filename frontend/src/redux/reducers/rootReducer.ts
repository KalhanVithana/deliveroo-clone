import { combineReducers } from '@reduxjs/toolkit';
import loginSlice from '../slice/loginSlice'; // Example slice

const rootReducer = combineReducers({
  auth: loginSlice,
  // Add more reducers here
});

export default rootReducer;
