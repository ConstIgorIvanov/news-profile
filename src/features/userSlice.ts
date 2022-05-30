import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type user = {
  username: string;
  password: string;
};

type userState = {
  user: user | null;
};

const initialState: userState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<user>) => {
      state.user = action.payload;
    },
    deleteUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
