import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeName, ChangeCost } from "../store/slices/formSlice";
import { AddCar } from "../store/slices/carSlice";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(ChangeName(event.target.value));
  };
  const HandleCostChange = (event) => {
    const CarCost = parseInt(event.target.value) || 0;
    dispatch(ChangeCost(CarCost));
  };
  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch(AddCar({ name, cost }));
    dispatch(ChangeName(""));
    dispatch(ChangeCost(0));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label htmlFor="" className="label">
              Name
            </label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="" className="label">
              Cost
            </label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || 0}
              onChange={HandleCostChange}
            />
          </div>
          <div className="field">
            <button onClick={HandleSubmit} className="button is-link">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
