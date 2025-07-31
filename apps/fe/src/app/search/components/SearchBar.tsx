"use client";

import { Box, Input } from "@chakra-ui/react";

type SearchBarProps = {
  searchQuery: string;
  onSearchChangeAction: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBar({
  searchQuery,
  onSearchChangeAction,
}: SearchBarProps) {
  return (
    <Box p="xl" border="border" borderWidth="1px" w="100%">
      <Input
        placeholder="投稿を検索"
        value={searchQuery}
        onChange={onSearchChangeAction}
        _focus={{ borderColor: "black" }}
      />
    </Box>
  );
}
