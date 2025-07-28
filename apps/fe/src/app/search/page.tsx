"use client";

import { Box, Input } from "@chakra-ui/react";
import { useState } from "react";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Box p="xl">
      <Input
        placeholder="投稿を検索"
        value={searchQuery}
        onChange={handleSearchChange}
        _focus={{ borderColor: "black" }}
      />
    </Box>
  );
}
