import { createSlice, nanoid } from "@reduxjs/toolkit";
const carSlice = createSlice({
  name: "car",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    AddCar(state, action) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    RemoveCar(state, action) {
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
  },
});
export const { changeSearchTerm, AddCar, RemoveCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
