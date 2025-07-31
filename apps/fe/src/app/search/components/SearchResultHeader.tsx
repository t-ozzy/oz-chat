"use client";

import { Box, Text, VStack } from "@chakra-ui/react";

type SearchResultHeaderProps = {
  searchQuery: string;
  resultCount: number;
};

export default function SearchResultHeader({
  searchQuery,
  resultCount,
}: SearchResultHeaderProps) {
  return (
    <Box border="border" borderWidth="1px" w="100%" p="l">
      <VStack w="100%" alignItems="flex-start">
        <Text fontWeight="bold" wordBreak="break-word">
          "{searchQuery}"の検索結果
        </Text>
        <Text fontSize="sm" color="gray.500">
          {resultCount}件の結果
        </Text>
      </VStack>
    </Box>
  );
}
