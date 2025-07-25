"use client";

import { Center } from "@chakra-ui/react";
import Posts from "@/components/posts/Posts";
import { posts } from "./const";

export default function PostsView() {
  return (
    <Center minH="100vh">
      <Posts posts={posts} />
    </Center>
  );
}
