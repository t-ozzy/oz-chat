"use client";

import { Avatar, Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function UserInfo() {
  const currentAccount = useSelector(
    (state: RootState) => state.currentAccount,
  );
  const follow = 0;
  const follower = 0;

  return (
    <Box
      w="size.full"
      p="6"
      backgroundColor="background.default"
      borderWidth="1px"
      borderColor="border"
    >
      <HStack align="start">
        <Avatar.Root size="2xl" mr="2">
          <Avatar.Fallback name="profile picture" />
          <Avatar.Image src="https://ui-avatars.com/api/?name=oz+chat" />
        </Avatar.Root>
        <VStack align="start" w="100%">
          <HStack justify="space-between" align="top" mb="1" w="100%">
            <Box>
              <Text fontSize="28px" fontWeight="bold" lineHeight="1" mb="1.5">
                {currentAccount.username}
              </Text>
              <Text color="gray.500">@{currentAccount.username}</Text>
            </Box>
            <Button
              size="md"
              bg="background.default"
              borderColor="gray.300"
              borderWidth="1px"
              borderRadius="8px"
              _hover={{ bg: "gray.100" }}
            >
              <Text color="black" fontSize="13px">
                プロフィール編集
              </Text>
            </Button>
          </HStack>
          <Text mb="3" wordBreak="break-word">
            {currentAccount.message}
          </Text>
          <HStack mb="4">
            <Text fontSize="s" color="gray.500" mr="2">
              <Text as="span" fontSize="m" fontWeight="bold" pr="1">
                {follow}
              </Text>
              フォロー中
            </Text>
            <Text fontSize="s" color="gray.500" mr="2">
              <Text as="span" fontSize="m" fontWeight="bold" pr="1">
                {follower}
              </Text>
              フォロワー
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
}
