"use client";

import { Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";
import { posts } from "./const";

export default function PostsView() {
  const postState = useSelector((state: RootState) => state.post);
  const allPosts = [...postState.posts, ...posts];

  return (
    <>
      <Center minH="100vh">
        <Posts posts={allPosts} />
      </Center>
    </>
  );
}
