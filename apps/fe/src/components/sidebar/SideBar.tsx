import { Box, Image, VStack } from "@chakra-ui/react";
import ozChatLogo from "./oz-chat.png";
import SideBarContent from "./SideBarContent";
import sideBarNavItems from "./sideBarNavItems";

export default function SideBar() {
  return (
    <Box
      w="sideBar.width"
      h="sideBar.height"
      p={4}
      background="background.default"
      color="fontColor.main"
      borderRightWidth="2px"
      borderColor="border"
      maxW="250px"
      minW="150px"
    >
      <VStack as="nav" align="stretch" pt={8}>
        <Image src={ozChatLogo.src} alt="oz-chat" w="150px" mb={8} />
        {sideBarNavItems.map((item) => (
          <SideBarContent {...item} key={item.label} />
        ))}
      </VStack>
    </Box>
  );
}
