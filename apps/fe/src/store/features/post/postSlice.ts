import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Post {
  id: string;
  name: string;
  post: string;
  createdAt: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{ name: string; post: string }>) => {
      const newPost = {
        id: crypto.randomUUID(), // Use UUID for unique ID
        name: action.payload.name,
        post: action.payload.post,
        createdAt: new Date().toISOString(),
      };
      state.posts.push(newPost);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(
        (article) => article.id !== action.payload,
      );
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
