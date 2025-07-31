"use client";

import { Box, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Posts from "@/components/posts/Posts";
import type { RootState } from "@/store/store";

export default function UserPosts() {
  const postState = useSelector((state: RootState) => state.post);
  const currentAcountState = useSelector((state: RootState) => state.account);
  const userPosts = postState.posts.filter(
    (e) => e.name === currentAcountState.username,
  );

  return (
    <>
      <Box
        p="3"
        bg="Background.default"
        fontSize="m"
        fontWeight="bold"
        borderWidth="1px"
      >
        投稿
      </Box>
      {userPosts.length !== 0 ? (
        <Posts posts={userPosts}></Posts>
      ) : (
        <Box display="flex" justifyContent="center">
          <Text mt="5" color="gray.500">
            まだ投稿がありません
          </Text>
        </Box>
      )}
    </>
  );
}
