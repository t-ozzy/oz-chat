"use client";

import { List } from "@chakra-ui/react";
import { defaultImgUrl } from "@/app/posts/const";
import Post from "./Post";
import type { Post as TypePost } from "./type";

type PostsProps = {
  posts: TypePost[];
};

export default function Posts({ posts }: PostsProps) {
  return (
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
  );
}
