"use client";

import Posts from "@/components/posts/Posts";
import { RootState } from "@/store/store";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function UserPosts() {
  const postState = useSelector((state: RootState) => state.post);
  const currentAcountState = useSelector((state: RootState) => state.account);
  const userPosts = postState.posts.filter(
    (e) => e.name === currentAcountState.username
  );

  return (
    <>
      <Box
        p="4"
        bg="Background.default"
        fontSize="m"
        fontWeight="bold"
        borderWidth="1px"
      >
        ツイート
      </Box>
      <Posts posts={userPosts}></Posts>
    </>
  );
}
