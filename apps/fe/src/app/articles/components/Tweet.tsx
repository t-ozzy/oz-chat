import { Box, HStack, Text, Avatar, Link } from "@chakra-ui/react";

type TweetProps = {
  tweetId: number;
  name: string;
  tweet: string;
  postTime: Date;
};

export default function Tweet({ tweetId, name, tweet, postTime }: TweetProps) {
  return (
    <Link href={`/articles/${tweetId}`}>
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
        <Text>{tweet}</Text>
      </Box>
    </Link>
  );
}
