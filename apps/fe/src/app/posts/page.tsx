"use client";

import { Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Header from "@/components/header/Header";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";
import { posts } from "./const";

export default function PostsView() {
  const postState = useSelector((state: RootState) => state.post);
  const allPosts = [...postState.posts, ...posts];

  return (
    <>
      <Header />
      <Center minH="100vh">
        <Posts posts={posts} />
      </Center>
    </>
  );
}
