"use client";

import { Center, List } from "@chakra-ui/react";
import { useState } from "react";
import Post from "./components/Post";
import { mockDBPosts } from "./mockData";
import type { Post as TypePost } from "./type";

export default function Articles() {
  const [posts, setPosts] = useState<TypePost[]>([]);

  const convertedPosts = mockDBPosts.map((e) => ({
    ...e,
    postTime: new Date(e.postTime),
  }));
  setPosts(convertedPosts);

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
