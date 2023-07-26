import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  team: [],
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    fetchTeam: async (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { fetchTeam } = teamSlice.actions;

export default teamSlice.reducer;
