import { Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { SideBarNavItem } from "./sideBarNavItems";

export default function SideBarContent({ href, label, icon }: SideBarNavItem) {
  return (
    <Link
      as={NextLink}
      href={href}
      display="flex"
      alignItems="left"
      p={2}
      borderRadius="md"
      _hover={{
        bg: "fontColor.main",
        color: "background.sideBar",
      }}
    >
      <Icon as={icon} mr={2} />
      {label}
    </Link>
  );
}
