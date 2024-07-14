import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addItems: (state, action) => {
      const { items } = action.payload;
      state.items = items.map((item) => ({ id: nanoid(), count: 0, ...item }));
    },
    increment: (state, action) => {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.count += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;

      const item = state.items.find((item) => item.id === id);
      if (item && item.count > 0) {
        item.count -= 1;
      }
    },
    removecart: (state, action) => {
      const id = action.payload;
      const findItem = state.items.find((item) => item.id === id);
      if (findItem) {
        findItem.count = 0;
      }
      // const item = state.items.filter((item) => item.count !== id);
      // state.items = item;
    },
  },
});

export const { addItems, increment, decrement, removecart } = cartSlice.actions;
export default cartSlice.reducer;
