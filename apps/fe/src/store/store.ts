"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import accountsReducer from "./features/account/accountsSlice";
import currentAccountReducer from "./features/account/currentAccountSlice";
import postReducer from "./features/post/postSlice";

const persistConfig = {
  key: "root",
  storage, // storageに永続化
};

const rootReducer = combineReducers({
  // 新規作成したReducerはここに追加していく
  currentAccount: currentAccountReducer,
  accounts: accountsReducer,
  post: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ["persist/PERSIST"],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload.createdAt"],
        // Ignore these paths in the state
        ignoredPaths: ["post"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
