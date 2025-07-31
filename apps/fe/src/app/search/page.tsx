"use client";

import { Box, VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import SearchBar from "./components/SearchBar";
import SearchResultHeader from "./components/SearchResultHeader";
import SearchResults from "./components/SearchResults";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const posts = useSelector((state: RootState) => state.post);

  const filteredPosts = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    return posts.filter((post) =>
      post.post.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, posts]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <VStack gap="0">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChangeAction={handleSearchChange}
      />
      {searchQuery && (
        <SearchResultHeader
          searchQuery={searchQuery}
          resultCount={filteredPosts.length}
        />
      )}
      <Box w="100%">
        <SearchResults
          searchQuery={searchQuery}
          filteredPosts={filteredPosts}
        />
      </Box>
    </VStack>
  );
}
