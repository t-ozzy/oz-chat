
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  id: string;
  content: string;
  username: string;
  createdAt: string;
}

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Omit<Post, 'id'>>) => {
      const newPost = {
        ...action.payload,
        id: new Date().toISOString(), // Use timestamp for unique ID
      };
      state.posts.push(newPost);
    },
    deletePost: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter(article => article.id !== action.payload);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
