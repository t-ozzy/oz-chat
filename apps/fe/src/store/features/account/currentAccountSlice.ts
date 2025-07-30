import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "./type";

const initialState: Account = {
  username: "",
  email: "",
  password: "",
  message: "",
};

export const CurrentAccountSlice = createSlice({
  name: "currentAccount",
  initialState,
  reducers: {
    updateCurrentAccountInfo: (state, action: PayloadAction<Partial<Account>>) => {
      return { ...state, ...action.payload };
    },
    clearCurrentAccountInfo: () => initialState,
  },
});

export const { updateCurrentAccountInfo, clearCurrentAccountInfo } = CurrentAccountSlice.actions;

export default CurrentAccountSlice.reducer;
