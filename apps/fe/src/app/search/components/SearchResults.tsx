"use client";

import { Center, Text } from "@chakra-ui/react";
import Posts from "@/components/posts/Posts";
import type { Post } from "@/components/posts/type";

type SearchResultsProps = {
  searchQuery: string;
  filteredPosts: Post[];
};

export default function SearchResults({
  searchQuery,
  filteredPosts,
}: SearchResultsProps) {
  if (!searchQuery) {
    return (
      <Center p="md" m="l">
        <Text color="gray.500">キーワードを入力して検索してください</Text>
      </Center>
    );
  }

  if (filteredPosts.length <= 0) {
    return (
      <Center p="md" m="l">
        <Text color="gray.500">検索結果が見つかりませんでした</Text>
      </Center>
    );
  }

  return <Posts posts={filteredPosts} />;
}
