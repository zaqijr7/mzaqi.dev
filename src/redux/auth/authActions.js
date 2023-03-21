import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (amount) => {
  const response = await fetchCount(amount);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});
