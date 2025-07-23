"use client";

import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { Post as TypePost } from "../type";

export default function PostDetail() {
  const params = useParams();
  const id: number = Number(params.id);
  const [post, setPost] = useState<TypePost | undefined>(undefined);

  // reduxの使い方がわからないため、一旦フェッチ
  useEffect(() => {
    (async () => {
      const res = await fetch("/mock.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      //   console.log(data);
      const found = data.find((e: TypePost) => e.id === id);
      //   console.log(`${id} : ${found}`);
      setPost(found);
    })();
  }, [id]);

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
