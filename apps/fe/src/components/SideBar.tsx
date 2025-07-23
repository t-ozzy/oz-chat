import { Box, VStack } from "@chakra-ui/react";
import { FaHome, FaPencilAlt, FaUser } from "react-icons/fa";
import SideBarContent from "./SideBarContent";

const menuItems = [
  { href: "/articles", label: "ホーム", icon: FaHome },
  { href: "/profile", label: "プロフィール", icon: FaUser },
  { href: "/articles/create", label: "記事投稿", icon: FaPencilAlt },
];

export default function SideBar() {
  return (
    <Box
      w="sideBar.width"
      h="sideBar.height"
      p={4}
      background="background.sideBar"
      color="fontColor.main"
    >
      <VStack as="nav" spacing={4} align="stretch" pt={8}>
        {menuItems.map((item) => (
          <SideBarContent
            href={item.href}
            label={item.label}
            icon={item.icon}
            key={item.href}
          />
        ))}
      </VStack>
    </Box>
  );
}
