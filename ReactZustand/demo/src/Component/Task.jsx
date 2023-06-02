import React from "react";
import "./Task.css";
import classNames from "classnames";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { BsTrash } from "react-icons/bs";

const Task = ({ title }) => {
  const task = useStore(
    (store) => store.tasks.find((task) => task.title === title),
    shallow
  );
  const setDragger = useStore((store) => store.setDraggerTask);
  const RemoveTask = useStore((store) => store.removeTask);
  return (
    <div className="task" draggable onDragStart={() => setDragger(task.title)}>
      <div>{title}</div>
      <div className="bottomWrapper">
        <div>
          <button onClick={() => RemoveTask(task.title)}>
            <BsTrash />
          </button>
        </div>
        <div className={classNames("status", task.state)}> {task.state}</div>
      </div>
    </div>
  );
};

export default Task;
