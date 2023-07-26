import { configureStore } from '@reduxjs/toolkit';
import teamReducer from './features/teamSlice';

export default configureStore({
  reducer: {
    // reducers go here
    team: teamReducer,
  },
});
