"use client";

import { List } from "@chakra-ui/react";
import { defaultImgUrl, posts } from "./const";
import Post from "./Post";

type FilteredPostsProps = {
  filterName?: string;
};

export default function FilteredPosts({ filterName }: FilteredPostsProps) {
  const filteredPosts = filterName
    ? posts.filter((e) => e.name === filterName)
    : posts;

  return (
    <List.Root listStyle="none">
      {filteredPosts.map((e) => {
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
