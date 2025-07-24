"use client";

import { Center, List } from "@chakra-ui/react";
import Post from "./components/Post";
import { mockDBPosts } from "./mockData";

export default function Articles() {
  const posts = mockDBPosts.map((e) => ({
    ...e,
    postTime: new Date(e.postTime),
  }));

  return (
    <Center minH="100vh">
      <List.Root listStyle="none">
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
