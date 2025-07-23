"use client";

import { Center, List } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import type { Post as TypePost } from "./type";

export default function Articles() {
  const [posts, setPosts] = useState<TypePost[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/mock.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setPosts(data.map((e) => ({ ...e, postTime: new Date(e.postTime) })));
    })();
  }, []);

  return (
    <Center minH="100vh">
      <List.Root>
        {posts.map((e) => {
          return (
            <List.Item key={e.id}>
              <Post
                key={e.id}
                postId={e.id}
                name={e.name}
                post={e.post}
                postTime={e.postTime}
              />
            </List.Item>
          );
        })}
      </List.Root>
    </Center>
  );
}
