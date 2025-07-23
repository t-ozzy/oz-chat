import {
  Box,
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
        <Grid templateColumns="1fr 2fr 1fr" gap={4}>
          {/* 左セクション */}
          <GridItem>
            <Box>profile pic</Box>
          </GridItem>

          {/* 中央セクションを縦3分割 */}
          <GridItem>
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
            <Box>プロフィール編集</Box>
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
