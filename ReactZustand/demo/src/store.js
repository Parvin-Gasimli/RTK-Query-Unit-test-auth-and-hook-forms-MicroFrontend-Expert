import create from "zustand";
import { persist } from "zustand/middleware";
const store = (set) => ({
  DraggedTask: null,
  tasks: [{ title: "Learn React", state: "PLANNED" }],
  addTask: (title, state) =>
    set(
      (store) => ({
        tasks: [...store.tasks, { title, state }],
      }),
      false,
      "Add task"
    ),
  removeTask: (title) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.title !== title),
    })),
  setDraggerTask: (title) =>
    set(() => ({
      DraggedTask: title,
    })),
  moveTask: (title, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.title === title ? { ...task, state } : task
      ),
    })),
});
const log = (config) => (set, get, api) => {
  return config(
    (args) => {
      console.log("  applying", ...args);
      set(args);
    },
    get,
    api
  );
};

export const useStore = create(log(persist(store, { name: "kanban-board" })));
