import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "./type";

const initialState: Account = {
  username: "",
  email: "",
  password: "",
  message: "",
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateAccountInfo: (
      state,
      action: PayloadAction<Partial<Account>>,
    ) => {
      return { ...state, ...action.payload };
    },
    clearAccountInfo: () => initialState,
  },
});

export const { updateAccountInfo, clearAccountInfo } = AccountSlice.actions;

export default AccountSlice.reducer;
