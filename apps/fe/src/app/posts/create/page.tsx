"use client";

import { Box } from "@chakra-ui/react";
import PostForm from "./PostForm";

export default function PostCreate() {
  return (
    <Box
      bg="background.default"
      borderWidth="1px"
      borderColor="border"
      h="100%"
    >
      <PostForm />
    </Box>
  );
}
