import React from "react";
import { useStore } from "../store";
import "./Column.css";
import Task from "./Task";
import { shallow } from "zustand/shallow";
import classNames from "classnames";

const Column = ({ state }) => {
  const [text, setText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [drop, setDrop] = React.useState(false);
  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );
  const addTask = useStore((store) => store.addTask);
  const setDraggerTask = useStore((store) => store.setDraggerTask);
  const moveTask = useStore((store) => store.moveTask);
  const DraggedTask = useStore((store) => store.DraggedTask);

  return (
    <div
      className={classNames("column", { drop: drop })}
      onDragOver={(e) => {
        e.preventDefault();
        setDrop(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrop(false);
      }}
      onDrop={(e) => {
        console.log(DraggedTask);
        setDraggerTask(null);
        moveTask(DraggedTask, state);
      }}
    >
      <div className="bottomWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      <div className="task_list">
        {tasks.map((task) => (
          <Task key={task.id} title={task.title} />
        ))}
      </div>
      {open && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={() => setOpen(false)}>
              &times;
            </span>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
