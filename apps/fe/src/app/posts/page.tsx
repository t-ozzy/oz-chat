"use client";

import { Center } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import Posts from "@/components/posts/Posts";
import { posts } from "./const";

export default function PostsView() {
  return (
    <>
      <Header />
      <Center minH="100vh">
        <Posts posts={posts} />
      </Center>
    </>
  );
}
