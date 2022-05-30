import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type post = {
  id: number;
  title: string;
  body: string;
};

type newsState = {
  posts: post[];
};

const initialState: newsState = {
  posts: [],
};

export const getPosts = createAsyncThunk(
  'news/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get<post[]>('https://jsonplaceholder.typicode.com/posts');
    dispatch(setPosts(res.data));
  },
);
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setPosts } = newsSlice.actions;
export default newsSlice.reducer;
