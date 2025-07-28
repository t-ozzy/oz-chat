"use client";

import { Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { Post } from "@/components/posts/type";
import type { RootState } from "@/store/store";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const postState = useSelector((state: RootState) => state.post);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (!event.target.value) {
      setPosts([]);
      return;
    }
    const filterdPosts = postState.posts.filter((post) =>
      post.post.includes(event.target.value),
    );

    setPosts(filterdPosts);
  };

  return (
    <VStack p="xl">
      <Input
        placeholder="投稿を検索"
        value={searchQuery}
        onChange={handleSearchChange}
        _focus={{ borderColor: "black" }}
      />
      <Posts posts={posts}></Posts>
    </VStack>
  );
}
