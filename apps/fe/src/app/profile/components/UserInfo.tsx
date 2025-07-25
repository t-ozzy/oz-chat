import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";

export default function UserInfo() {
  return (
    <Grid>
      <GridItem border="2px solid" borderColor="border" pt={5} pl={3}>
        <Grid templateColumns="min-content min-content min-content">
          {/* 左セクション */}
          <GridItem display="flex" justifyContent="flex-end">
            <Avatar.Root size="2xl">
              <Avatar.Fallback name="profile picture" />
              <Avatar.Image src="https://ui-avatars.com/api/?name=oz+chat" />
            </Avatar.Root>
          </GridItem>

          {/* 中央セクションを縦3分割 */}
          <GridItem minW="200px" pl={2}>
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
          <GridItem pr={2}>
            <Button size="lg">プロフィール編集</Button>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem>
        <Text pl={4}>投稿</Text>
      </GridItem>
    </Grid>
  );
}
