import { Avatar, Box, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { formatRelativeTime } from "../../utils/date";

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
    <Link
      href={`/posts/${postId}`}
      as={NextLink}
      textDecoration="none"
      width="100%"
      _focus={{
        outline: "none",
        boxShadow: "none",
      }}
    >
      <Box
        borderWidth="1px"
        borderColor="border"
        pt="4"
        pb="5"
        pl="4"
        pr="5"
        width="100%"
        bg="background.default"
        _hover={{ bg: "background.hover" }}
      >
        <HStack align="top">
          <Avatar.Root colorPalette="gray" mr="1">
            <Avatar.Fallback name="O Z" />
            <Avatar.Image src={img} />
          </Avatar.Root>
          <VStack align="start" gap="xxs">
            <HStack>
              <Text fontSize="m" fontWeight="bold">
                {name}
              </Text>
              <Text fontSize="s" color="gray.700">
                {formatRelativeTime(createdAt)}
              </Text>
            </HStack>
            <Text wordBreak="break-word">{post}</Text>
          </VStack>
        </HStack>
      </Box>
    </Link>
  );
}
