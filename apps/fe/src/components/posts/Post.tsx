import { Avatar, Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

type PostProps = {
  postId: string;
  name: string;
  post: string;
  createdAt: string;
  img: string;
};

export default function Post({
  postId,
  name,
  post,
  createdAt,
  img,
}: PostProps) {
  return (
    <Link href={`/posts/${postId}`} as={NextLink} textDecoration="none">
      <Box
        borderWidth="1px"
        borderColor="border"
        py="4"
        px="5"
        bg="background.default"
        width="600px"
      >
        <HStack align="top">
          <Avatar.Root colorPalette="gray">
            <Avatar.Fallback name="O Z" />
            <Avatar.Image src={img} />
          </Avatar.Root>
          <VStack align="left">
            <HStack>
              <Text fontSize="m" fontWeight="bold">
                {name}
              </Text>
              <Text fontSize="s" color="gray.700">
                {createdAt}
              </Text>
            </HStack>
            <Text>{post}</Text>
          </VStack>
        </HStack>
      </Box>
    </Link>
  );
}
