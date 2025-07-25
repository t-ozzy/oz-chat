"use client";

import { Center, List } from "@chakra-ui/react";
import Post from "./components/Post";
import { posts, defaultImgUrl } from "./const";

export default function Posts() {
  return (
    <Center minH="100vh">
      <List.Root listStyle="none">
        {posts.map((e) => {
          return (
            <List.Item key={e.id}>
              <Post
                postId={e.id}
                name={e.name}
                post={e.post}
                createdAt={e.createdAt}
                img={defaultImgUrl}
              />
            </List.Item>
          );
        })}
      </List.Root>
    </Center>
  );
}
