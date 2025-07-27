import { Box, VStack } from "@chakra-ui/react";
import SideBarContent from "./SideBarContent";
import sideBarNavItems from "./sideBarNavItems";

export default function SideBar() {
  return (
    <Box
      w="sideBar.width"
      h="sideBar.height"
      p={4}
      background="background"
      color="fontColor.main"
      borderRightWidth="2px"
      borderColor="border"
    >
      <VStack as="nav" align="stretch" pt={8}>
        {sideBarNavItems.map((item) => (
          <SideBarContent {...item} key={item.href} />
        ))}
      </VStack>
    </Box>
  );
}
