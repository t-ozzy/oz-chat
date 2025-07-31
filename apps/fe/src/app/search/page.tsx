"use client";

import { Box, Center, Input, Text, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const posts = useSelector((state: RootState) => state.post);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    return posts.filter((post) => post.post.includes(searchQuery));
  }, [searchQuery, posts]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const renderContent = () => {
    if (!searchQuery) {
      return (
        <Center p="md" m="l">
          <Text color="gray.500">キーワードを入力して検索してください</Text>
        </Center>
      );
    }
    if (filteredPosts.length) {
      return <Posts posts={filteredPosts} />;
    }
    return (
      <Center p="md" m="l">
        <Text color="gray.500">検索結果が見つかりませんでした</Text>
      </Center>
    );
  };

  return (
    <VStack gap={0}>
      <Box p="xl" border="border" borderWidth="1px" w="100%">
        <Input
          placeholder="投稿を検索"
          value={searchQuery}
          onChange={handleSearchChange}
          _focus={{ borderColor: "black" }}
        />
      </Box>
      {searchQuery && (
        <Box border="border" borderWidth="1px" w="100%" p="l">
          <VStack w="100%" alignItems="flex-start">
            <Text fontWeight="bold" wordBreak="break-word">
              "{searchQuery}"の検索結果
            </Text>
            <Text fontSize="sm" color="gray.500">
              {filteredPosts.length}件の結果
            </Text>
          </VStack>
        </Box>
      )}
      <Box w="100%">{renderContent()}</Box>
    </VStack>
  );
}
