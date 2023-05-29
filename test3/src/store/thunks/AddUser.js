import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import axios from "axios";

const addUser = createAsyncThunk("user/add", async (user) => {
  //   const response = await fetch("http://localhost:3001/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });
  const response = await axios.post("http://localhost:3001/users", {
    name: faker.name.fullName(),
    email: faker.internet.email(),
  });
  return await response.data;
});

export { addUser };
