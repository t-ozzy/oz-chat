"use client";

import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";

export default function PostsView() {
  const posts = useSelector((state: RootState) => state.post);

  return (
    <Box>
      <Posts posts={posts} />
    </Box>
  );
}
