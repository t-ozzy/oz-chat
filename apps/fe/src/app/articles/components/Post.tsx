import { Avatar, Box, HStack, Link, Text } from "@chakra-ui/react";

type PostProps = {
  postId: number;
  name: string;
  post: string;
  postTime: Date;
};

export default function Post({ postId, name, post, postTime }: PostProps) {
  return (
    <Link href={`/articles/${postId}`}>
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
            <Avatar.Image src="aaa" />
          </Avatar.Root>
          <Text fontSize="xl" fontWeight="bold">
            {name}
          </Text>
          <Text fontSize="s" color="gray.700" alignSelf="flex-end">
            {postTime.toLocaleString()}
          </Text>
        </HStack>
        <Text>{post}</Text>
      </Box>
    </Link>
  );
}
