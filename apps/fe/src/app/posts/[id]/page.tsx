"use client";

import { Avatar, Box, HStack, Text, VStack } from "@chakra-ui/react";
import { notFound, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { defaultImgUrl } from "@/app/posts/const";
import type { RootState } from "@/store/store";
import { formatRelativeTime } from "@/utils/date";

export default function PostDetail() {
  const params = useParams();
  const id: string = params.id ? String(params.id) : "";

  const posts = useSelector((state: RootState) => state.post);
  const post = posts.find((e) => e.id === id);

  if (!post) notFound();
  return (
    <Box
      width="sizes.full"
      height="auto"
      pt="4"
      pb="8"
      px="6"
      bg="background.default"
      borderWidth="2px"
      borderColor="border.default"
    >
      <HStack align="top">
        <Avatar.Root colorPalette="border.default" mr="1">
          <Avatar.Fallback name="O Z" />
          <Avatar.Image src={defaultImgUrl} />
        </Avatar.Root>
        <VStack align="start">
          <Text fontSize="l" fontWeight="bold">
            {post.name}
          </Text>
          <Text fontSize="l" wordBreak="break-word">
            {post.post}
          </Text>
          <Text fontSize="s" color="gray.500" mt="2">
            {formatRelativeTime(post.createdAt)}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}
