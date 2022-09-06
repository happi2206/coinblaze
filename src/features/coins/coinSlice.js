import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coins: [],
};

export const coinSlice = createSlice({
  name: 'coin',
  initialState,
  reducers: {
    setCoins: (state, action) => {
      state.coins.push(action.payload);
    },
  },
});

export const { setCoins } = coinSlice.actions;

export default coinSlice.reducer;
