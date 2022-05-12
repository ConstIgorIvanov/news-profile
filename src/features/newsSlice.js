import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  "news/getPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(setPosts(res.data));
  }
);
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: () => console.log("getPosts: pending"),
    [getPosts.fulfilled]: () => console.log("getPosts: fulfilled"),
    [getPosts.rejected]: () => console.log("getPosts: rejected"),
  },
});

export const { setPosts } = newsSlice.actions;
export default newsSlice.reducer;
