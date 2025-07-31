import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import type { SideBarNavItem } from "./sideBarNavItems";

export default function SideBarContent({
  label,
  icon: IconComponent,
  onClick,
  color,
}: SideBarNavItem) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Button
      variant="ghost"
      onClick={() => onClick(router, dispatch)}
      display="flex"
      p={2}
      borderRadius="md"
      _hover={{
        bg: "fontColor.main",
        color: "background.default",
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
