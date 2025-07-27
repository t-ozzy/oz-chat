"use client";

import { Box, HStack, VStack } from "@chakra-ui/react";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";
import { usePathname } from "next/navigation";
import { getLayoutConfig } from "@/config/layoutConfig";

interface ConfigBasedLayoutProps {
  children: React.ReactNode;
}

export default function ConfigBasedLayout({ children }: ConfigBasedLayoutProps) {
  const pathname = usePathname();
  const config = getLayoutConfig(pathname);

  return (
    <Box bg="background.default" minH="100vh">
      <HStack align="top">
        {config.showSidebar && <SideBar />}
        <VStack align="left" flex="1">
          {config.showHeader && <Header />}
          {children}
        </VStack>
      </HStack>
    </Box>
  );
} 