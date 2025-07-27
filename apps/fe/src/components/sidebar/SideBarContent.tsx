import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { SideBarNavItem } from "./sideBarNavItems";

export default function SideBarContent({ href, label, icon: IconComponent }: SideBarNavItem) {
  return (
    <Link
      as={NextLink}
      href={href}
      display="flex"
      p={2}
      borderRadius="md"
      _hover={{
        bg: "fontColor.main",
        color: "background.sideBar",
      }}
    >
      <Box mr={2}>
        <IconComponent />
      </Box>
      {label}
    </Link>
  );
}
