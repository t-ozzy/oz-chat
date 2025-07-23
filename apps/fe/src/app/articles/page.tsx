"use client";

import { useEffect, useState } from "react";
import Tweet from "./Tweet";
import { Center } from "@chakra-ui/react";

type Tweet = {
  id: number;
  name: string;
  tweet: string;
  postTime: Date;
};

export default function Articles() {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/mock.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data: Tweet[] = await res.json();
      console.log(data);
      setTweets(data);
    })();
  }, []);

  return (
    <>
      <Center minH="100vh">
        <ul>
          {tweets.map((e) => {
            return (
              <Tweet
                key={e.id}
                name={e.name}
                tweet={e.tweet}
                postTime={new Date(e.postTime)}
              />
            );
          })}
        </ul>
      </Center>
    </>
  );
}
