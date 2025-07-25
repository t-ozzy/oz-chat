import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AccountState {
  username: string;
  email: string;
  password: string;
  selfIntroduction: string;
}

const initialState: AccountState = {
  username: "",
  email: "",
  password: "",
  selfIntroduction: "",
};

export const AccountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    updateRegistrationInfo: (
      state,
      action: PayloadAction<Partial<AccountState>>,
    ) => {
      return { ...state, ...action.payload };
    },
    clearRegistrationInfo: () => initialState,
  },
});

export const { updateRegistrationInfo, clearRegistrationInfo } =
  AccountSlice.actions;

export default AccountSlice.reducer;
