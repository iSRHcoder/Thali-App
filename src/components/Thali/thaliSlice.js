import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thali: [],
};

export const thaliSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTothali: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.thali.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.thali.push({ ...newItem, quantity: 1 });
      }
    },
    RemoveItem: (state, action) => {
      state.thali.splice(action.payload, 1);
    },
    IncreaseQuantity: (state, action) => {
      const index = action.payload;
      state.thali[index].quantity += 1;
    },
    DecreaseQuantity: (state, action) => {
      const index = action.payload;
      if (state.thali[index].quantity > 1) {
        state.thali[index].quantity -= 1;
      }
    },
    clearThali: (state) => {
      state.thali = [];
    },
  },
});

export const {
  addTothali,
  RemoveItem,
  IncreaseQuantity,
  DecreaseQuantity,
  clearThali,
} = thaliSlice.actions;

export default thaliSlice.reducer;
