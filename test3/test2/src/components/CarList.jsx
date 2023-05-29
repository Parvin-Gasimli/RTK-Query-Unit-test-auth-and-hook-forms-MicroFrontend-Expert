import { useSelector, useDispatch } from "react-redux";
import { RemoveCar } from "../store/slices/carSlice";
import CarSearch from "./CarSearch";
function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(({ car: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleCarDelete = (id) => {
    console.log(id);
    dispatch(RemoveCar(id));
  };

  const renderedCars =
    cars &&
    cars.map((car) => {
      return (
        <div key={car.id} className="panel">
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className="button is-danger"
            onClick={() => handleCarDelete(car.id)}
          >
            Delete
          </button>
        </div>
      );
    });

  return (
    <div className="car-list">
      <CarSearch />
      <hr />
      {renderedCars}
    </div>
  );
}

export default CarList;
