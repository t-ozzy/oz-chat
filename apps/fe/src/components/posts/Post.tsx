import { Avatar, Box, HStack, Link, Text } from "@chakra-ui/react";
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
    <Link href={`/posts/${postId}`} as={NextLink}>
      <Box
        borderWidth="1px"
        borderColor="black"
        py="4"
        px="5"
        bg="white"
        width="600px"
      >
        <HStack>
          <Avatar.Root colorPalette="gray">
            <Avatar.Fallback name="O Z" />
            <Avatar.Image src={img} />
          </Avatar.Root>
          <Text fontSize="xl" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="s" color="gray.700" alignSelf="flex-end">
            {createdAt}
          </Text>
        </HStack>
        <Text>{post}</Text>
      </Box>
    </Link>
  );
}
