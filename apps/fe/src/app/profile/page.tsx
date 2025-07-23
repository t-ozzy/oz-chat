import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

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
                <Text>@oz-chat</Text>
              </GridItem>
              <GridItem mb={4}>
                <Box>description</Box>
              </GridItem>
              <GridItem>
                <Box>followers</Box>
              </GridItem>
            </Grid>
          </GridItem>

          {/* 右セクション */}
          <GridItem>
            <Box>プロフィール編集</Box>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
}
