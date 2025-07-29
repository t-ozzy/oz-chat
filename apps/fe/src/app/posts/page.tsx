"use client";

import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";
import { posts } from "./const";

export default function PostsView() {
  const postState = useSelector((state: RootState) => state.post);
  const allPosts = [...postState.posts, ...posts];

  return (
    <Box>
      <Posts posts={allPosts} />
    </Box>
  );
}
