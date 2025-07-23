import { Box, HStack, Text, Avatar } from "@chakra-ui/react";

type TweetProps = {
  name: string;
  tweet: string;
  postTime: Date;
};

export default function Tweet({ name, tweet, postTime }: TweetProps) {
  return (
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
          <Avatar.Image src="" />
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
  );
}
