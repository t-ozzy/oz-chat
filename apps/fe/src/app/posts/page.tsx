"use client";

import { Center } from "@chakra-ui/react";
import FilteredPosts from "@/components/posts/FilteredPosts";

export default function Posts() {
  return (
    <Center minH="100vh">
      <FilteredPosts />
    </Center>
  );
}
