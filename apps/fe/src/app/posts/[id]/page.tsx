"use client";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { defaultImgUrl, posts } from "@/app/posts/const";
import Header from "@/components/header/Header";

export default function PostDetail() {
  const params = useParams();
  const id: string = params.id ? String(params.id) : "";

  const post = posts.find((e) => e.id === id);

  if (!post) return <div>Not Found</div>;
  return (
    <>
      <Header></Header>
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
    </>
  );
}
