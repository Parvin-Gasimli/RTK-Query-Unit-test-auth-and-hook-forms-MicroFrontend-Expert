import { createAsyncThunk } from "@reduxjs/toolkit";
const fetchUsers = createAsyncThunk("user/fetch", async () => {
  const response = await fetch("http://localhost:3001/users");
  pause(5000);
  return await response.json();
});
const pause = (duration) =>
  new Promise((resolve) => setTimeout(resolve, duration));
export { fetchUsers };
