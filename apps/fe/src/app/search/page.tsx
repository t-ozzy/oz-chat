"use client";

import { Input, Text, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { posts: allPosts } = useSelector((state: RootState) => state.post);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    return allPosts.filter((post) => post.post.includes(searchQuery));
  }, [searchQuery, allPosts]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <VStack p="xl">
      <Input
        placeholder="投稿を検索"
        value={searchQuery}
        onChange={handleSearchChange}
        _focus={{ borderColor: "black" }}
      />
      {searchQuery && (
        <VStack w="100%" alignItems="flex-start">
          <Text fontWeight="bold">"{searchQuery}"の検索結果</Text>
          <Text fontSize="sm" color="gray.500">
            {filteredPosts.length}件の結果
          </Text>
        </VStack>
      )}
      <Posts posts={filteredPosts}></Posts>
    </VStack>
  );
}
