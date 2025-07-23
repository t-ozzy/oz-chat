"use client";

import { useEffect, useState } from "react";
import { Center, List } from "@chakra-ui/react";
import type { Tweet as TweetType } from "./type";
import Tweet from "./Tweet";

export default function Articles() {
  const [tweets, setTweets] = useState<TweetType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/mock.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setTweets(
        data.map((e: any) => ({ ...e, postTime: new Date(e.postTime) }))
      );
    })();
  }, []);

  return (
    <>
      <Center minH="100vh">
        <List.Root>
          {tweets.map((e) => {
            return (
              <List.Item key={e.id}>
                <Tweet
                  key={e.id}
                  tweetId={e.id}
                  name={e.name}
                  tweet={e.tweet}
                  postTime={e.postTime}
                />
              </List.Item>
            );
          })}
        </List.Root>
      </Center>
    </>
  );
}
