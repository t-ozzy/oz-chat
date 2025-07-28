import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AccountState } from "@/store/features/account/type";

interface UsersState {
  users: AccountState[];
}

const initialState: UsersState = {
  users: [],
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Userが登録されていない場合、追加する
    addUser: (state, action: PayloadAction<AccountState>) => {
      const existing = state.users.find(
        (user) => user.email === action.payload.email,
      );
      if (!existing) {
        state.users.push(action.payload);
      }
    },
  },
});

export const { addUser } = UsersSlice.actions;

export default UsersSlice.reducer;
