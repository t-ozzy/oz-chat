import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AccountState } from "./type";

const initialState: AccountState = {
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
      action: PayloadAction<Partial<AccountState>>,
    ) => {
      return { ...state, ...action.payload };
    },
    clearAccountInfo: () => initialState,
  },
});

export const { updateAccountInfo, clearAccountInfo } = AccountSlice.actions;

export default AccountSlice.reducer;
