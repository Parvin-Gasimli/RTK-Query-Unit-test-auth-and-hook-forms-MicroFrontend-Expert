import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const DeleteUser = createAsyncThunk("user/delete", async (user) => {
  console.log(user);
  await axios.delete(`http://localhost:3001/users/${user}`);
  return user;
});

export { DeleteUser };
