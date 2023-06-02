import React from "react";
import Column from "./Component/Column";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Column state={"PLANNED"} />
      <Column state={"ONGOING"} />
      <Column state={"DONE"} />
    </div>
  );
};

export default App;
