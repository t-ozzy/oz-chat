"use client";

import { Box, HStack, Text, Avatar } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Tweet as TypeTweet } from "../type";
import { useParams } from "next/navigation";

export default function TweetDetail() {
  const params = useParams();
  const id: number = Number(params.id);
  const [tweet, setTweet] = useState<TypeTweet | undefined>(undefined);

  // reduxの使い方がわからないため、一旦フェッチ
  useEffect(() => {
    (async () => {
      const res = await fetch("/mock.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      //   console.log(data);
      const found = data.find((e: TypeTweet) => e.id === id);
      //   console.log(`${id} : ${found}`);
      setTweet(found);
    })();
  }, [id]);

  if (!tweet) return <div>Not Found</div>;

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
          {tweet.name}
        </Text>
        <Text fontSize="s" color="gray.700" alignSelf="flex-end">
          {tweet.postTime.toLocaleString()}
        </Text>
      </HStack>
      <Text>{tweet.tweet}</Text>
    </Box>
  );
}
