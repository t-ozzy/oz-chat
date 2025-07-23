"use client";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { mockDBPosts } from "../mockData";
import type { Post as TypePost } from "../type";

export default function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState<TypePost | undefined>(undefined);

  const id: number = Number(params.id);
  if (!(Number.isInteger(id) && Number.isFinite(id) && id >= 0)) {
    return <div>Not Found</div>;
  }

  const found = mockDBPosts.find((e) => e.id === id);
  if (!found) {
    return <div>Not Found</div>;
  }
  const convertedPost = { ...found, postTime: new Date(found.postTime) };
  setPost(convertedPost);

  if (!post) return <div>Not Found</div>;
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
