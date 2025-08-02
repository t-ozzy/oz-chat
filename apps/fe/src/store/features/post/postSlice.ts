import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "@/components/posts/type";

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{ name: string; post: string }>) => {
      const newPost = {
        id: crypto.randomUUID(), // Use UUID for unique ID
        name: action.payload.name,
        post: action.payload.post,
        createdAt: new Date(),
      };
      state.unshift(newPost); // 先頭に入れる
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state = state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
