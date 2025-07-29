import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "@/store/features/account/type";

interface Users {
  users: Account[];
}

const initialState: Users = {
  users: [],
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Userが登録されていない場合、追加する
    // INFO usernameとemailは重複を許可しない
    addUser: (state, action: PayloadAction<Account>) => {
      const existing = state.users.find(
        (user) =>
          user.email === action.payload.email ||
          user.username === action.payload.username,
      );
      if (!existing) {
        state.users.push(action.payload);
      }
    },
  },
});

export const { addUser } = UsersSlice.actions;

export default UsersSlice.reducer;
