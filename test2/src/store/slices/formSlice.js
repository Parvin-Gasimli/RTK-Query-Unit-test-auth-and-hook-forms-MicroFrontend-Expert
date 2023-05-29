import { createSlice } from "@reduxjs/toolkit";
import { AddCar } from "./carSlice";

const FormSlice = createSlice({
  name: "form",
  initialState: {
    cost: 0,
    name: "",
  },

  reducers: {
    ChangeName: (state, action) => {
      state.name = action.payload;
    },
    ChangeCost: (state, action) => {
      state.cost = action.payload;
    },
  },
  extraReducers: {
    [AddCar]: (state, action) => {
      state.name = "";
      state.cost = 0;
    },
  },
});
export const { ChangeName, ChangeCost } = FormSlice.actions;
export const FormReducer = FormSlice.reducer;
