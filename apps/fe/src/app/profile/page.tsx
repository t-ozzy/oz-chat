import { Box, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

export default function Profile() {
  return (
    <>
      <Grid templateColumns="1fr 2fr 1fr" h="300px" gap={4}>
        {/* 左セクション */}
        <GridItem>
          <Box>profile pic</Box>
        </GridItem>

        {/* 中央セクションを縦3分割 */}
        <GridItem>
          <Grid templateRows="repeat(4, 1fr)" h="100%">
            <GridItem>
              <Box>name</Box>
            </GridItem>
            <GridItem>
              <Box>id</Box>
            </GridItem>
            <GridItem>
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
    </>
  );
}
