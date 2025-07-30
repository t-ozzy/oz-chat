import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "@/store/features/account/type";

const initialState: Account[] = [];

export const AccountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    // Accountが登録されていない場合、追加する
    // INFO usernameとemailは重複を許可しない
    addAccount: (state, action: PayloadAction<Account>) => {
      const existing = state.find(
        (account) =>
          account.email === action.payload.email ||
          account.username === action.payload.username,
      );
      if (!existing) {
        state.push(action.payload);
      }
    },
  },
});

export const { addAccount } = AccountsSlice.actions;

export default AccountsSlice.reducer;
