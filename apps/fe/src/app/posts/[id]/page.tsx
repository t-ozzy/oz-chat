"use client";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { notFound, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { defaultImgUrl, posts } from "@/app/posts/const";
import type { RootState } from "@/store/store";

export default function PostDetail() {
  const params = useParams();
  const id: string = params.id ? String(params.id) : "";

  const postState = useSelector((state: RootState) => state.post);
  const allPosts = [...postState.posts, ...posts];
  const post = allPosts.find((e) => e.id === id);

  if (!post) notFound();
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
          <Avatar.Image src={defaultImgUrl} />
        </Avatar.Root>
        <Text fontSize="xl" fontWeight="bold">
          {post.name}
        </Text>
        <Text fontSize="s" color="gray.700" alignSelf="flex-end">
          {post.createdAt}
        </Text>
      </HStack>
      <Text>{post.post}</Text>
    </Box>
  );
}
