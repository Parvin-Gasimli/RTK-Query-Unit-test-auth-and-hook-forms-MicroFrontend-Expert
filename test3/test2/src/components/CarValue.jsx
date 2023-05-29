import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const TotalCost = useSelector((state) => {
    return state.car.data.reduce((total, car) => {
      return total + car.cost;
    }, 0);
  });
  return <div className="car-value">Total Cost:${TotalCost || 0}</div>;
};

export default CarValue;
