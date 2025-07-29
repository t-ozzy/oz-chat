"use client";

import { Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";

export default function PostsView() {
  const posts = useSelector((state: RootState) => state.post.posts);

  return (
    <Center minH="100vh">
      <Posts posts={posts} />
    </Center>
  );
}
