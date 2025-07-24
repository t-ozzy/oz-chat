"use client";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { mockDBPosts } from "../mockData";

export default function PostDetail() {
  const params = useParams();
  const id: number = Number(params.id);
  if (!(Number.isInteger(id) && Number.isFinite(id) && id >= 0)) {
    return <div>Not Found</div>;
  }

  const found = mockDBPosts.find((e) => e.id === id);
  if (!found) {
    return <div>Not Found</div>;
  }

  const post = { ...found, postTime: new Date(found.postTime) };

  return (
    <Box
      borderWidth="1px"
      borderColor="black"
      py="4"
      px="5"
      bg="white"
      width="100%"
      height="500px"
    >
      <HStack>
        <Avatar.Root colorPalette="gray">
          <Avatar.Fallback name="O Z" />
          <Avatar.Image src="aaa" />
        </Avatar.Root>
        <Text fontSize="xl" fontWeight="bold">
          {post.name}
        </Text>
        <Text fontSize="s" color="gray.700" alignSelf="flex-end">
          {post.postTime.toLocaleString()}
        </Text>
      </HStack>
      <Text>{post.post}</Text>
    </Box>
  );
}
