import { Box, VStack } from "@chakra-ui/react";
import SideBarContent from "./SideBarContent";
import sideBarNavItems from "./sideBarNavItems";

export default function SideBar() {
  return (
    <Box
      w="sideBar.width"
      h="sideBar.height"
      p={4}
      background="background.sideBar"
      color="fontColor.main"
      borderRightWidth="2px"
      borderColor="borderColor.main"
    >
      <VStack as="nav" spacing={4} align="stretch" pt={8}>
        {sideBarNavItems.map((item) => (
          <SideBarContent {...item} key={item.href} />
        ))}
      </VStack>
    </Box>
  );
}
