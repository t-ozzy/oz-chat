import { Box, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { SideBarNavItem } from "./sideBarNavItems";

export default function SideBarContent({
  href,
  label,
  icon: IconComponent,
}: SideBarNavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      as={NextLink}
      href={href}
      display="flex"
      p={2}
      borderRadius="md"
      bg={isActive ? "fontColor.main" : "transparent"}
      color={isActive ? "background.default" : "fontColor.main"}
      _hover={!isActive ? { bg: "background.hover" } : {}}
      textDecoration="none"
    >
      <Box mr={2}>
        <IconComponent />
      </Box>
      {label}
    </Link>
  );
}
