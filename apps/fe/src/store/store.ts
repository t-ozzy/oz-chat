"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import type { Post } from "@/components/posts/type";
import accountsReducer from "./features/account/accountsSlice";
import currentAccountReducer from "./features/account/currentAccountSlice";
import postReducer from "./features/post/postSlice";

// Dateオブジェクトの変換処理
const dateTransform = {
  // localStorageに保存する際にDateを文字列に変換
  in: (state: RootState) => {
    if (!state) return state;

    // postスライスのcreatedAtを文字列に変換
    if (state.post && Array.isArray(state.post)) {
      return {
        ...state,
        post: state.post.map((post: Post) => ({
          ...post,
          createdAt:
            post.createdAt instanceof Date
              ? post.createdAt.toISOString()
              : post.createdAt,
        })),
      };
    }

    return state;
  },

  // localStorageから読み込む際に文字列をDateに変換
  out: (state: RootState) => {
    if (!state) return state;

    // postスライスのcreatedAtをDateに変換
    if (state.post && Array.isArray(state.post)) {
      return {
        ...state,
        post: state.post.map((post: Post) => ({
          ...post,
          createdAt:
            typeof post.createdAt === "string"
              ? new Date(post.createdAt)
              : post.createdAt,
        })),
      };
    }

    return state;
  },
};

const persistConfig = {
  key: "root",
  storage, // storageに永続化
  transforms: [dateTransform], // 変換処理を追加
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
