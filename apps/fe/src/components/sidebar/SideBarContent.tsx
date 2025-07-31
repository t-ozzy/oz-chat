import { Box, Button } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import type { SideBarNavItem } from "./sideBarNavItems";

export default function SideBarContent({
  href,
  label,
  icon: IconComponent,
  onClick,
  color,
}: SideBarNavItem) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Button
      variant="ghost"
      onClick={() => onClick(router, dispatch)}
      display="flex"
      p={2}
      borderRadius="md"
      bg={isActive ? "fontColor.main" : "transparent"}
      color={isActive ? "background.default" : "fontColor.main"}
      _hover={!isActive ? { bg: "background.hover" } : {}}
      textDecoration="none"
      _focus={{
        outline: "none",
        boxShadow: "none",
      }}
      w="100%"
      justifyContent="flex-start"
      color={color}
    >
      <Box mr={2}>
        <IconComponent />
      </Box>
      {label}
    </Button>
  );
}
