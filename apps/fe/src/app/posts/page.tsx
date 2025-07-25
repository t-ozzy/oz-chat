"use client";

import { Center } from "@chakra-ui/react";
import Posts from "@/components/posts/Posts";
import Header from "@/components/header/Header";
import { posts } from "./const";

export default function PostsView() {
  return (
    <>
      <Header></Header>
      <Center minH="100vh">
        <Posts posts={posts} />
      </Center>
    </>
  );
}
