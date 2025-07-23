import { Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import type { IconType } from "react-icons";

interface SideBarContentProps {
  href: string;
  label: string;
  icon: IconType;
}

export default function SideBarContent({
  href,
  label,
  icon,
}: SideBarContentProps) {
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
