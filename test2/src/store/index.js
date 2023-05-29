import { configureStore } from "@reduxjs/toolkit";
import {
  changeSearchTerm,
  AddCar,
  RemoveCar,
  carReducer,
} from "./slices/carSlice";
import { ChangeName, ChangeCost, FormReducer } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    car: carReducer,
    form: FormReducer,
  },
});
export { store, ChangeName, ChangeCost, AddCar, RemoveCar, changeSearchTerm };
