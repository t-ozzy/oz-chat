"use client";

import { List } from "@chakra-ui/react";
import { defaultImgUrl } from "@/app/posts/const";
import PostComponent from "./Post";
import type { Post } from "./type";

type PostsProps = {
  posts: Post[];
};

export default function Posts({ posts }: PostsProps) {
  console.log(posts);
  return (
    <List.Root listStyle="none" width="100%">
      {posts.map((e) => {
        return (
          <List.Item key={e.id}>
            <PostComponent
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
