import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Grid>
      <GridItem border="2px solid" borderColor="border">
        <Grid templateColumns="min-content min-content min-content" gap={100}>
          {/* 左セクション */}
          <GridItem>
            <Center>
              <Avatar.Root size="2xl">
                <Avatar.Fallback name="profile picture" />
                <Avatar.Image src="https://ui-avatars.com/api/?name=oz+chat" />
              </Avatar.Root>
            </Center>
          </GridItem>

          {/* 中央セクションを縦3分割 */}
          <GridItem minW="200px">
            <Grid templateRows="repeat(4, auto)">
              <GridItem>
                <Text fontSize="l" fontWeight="medium">
                  oz
                </Text>
              </GridItem>
              <GridItem mb={4}>
                <Text color="fontColor.lightGray">@oz-chat</Text>
              </GridItem>
              <GridItem mb={4}>
                <Box>description</Box>
              </GridItem>
              <GridItem mb={2}>
                <HStack spaceX="l">
                  <Text fontSize="s">0フォロー中</Text>
                  <Text fontSize="s">0フォロワー</Text>
                </HStack>
              </GridItem>
            </Grid>
          </GridItem>

          {/* 右セクション */}
          <GridItem>
            <Button size="lg">プロフィール編集</Button>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem>
        <Center>
          <Text>ツイート</Text>
        </Center>
      </GridItem>
    </Grid>
  );
}
