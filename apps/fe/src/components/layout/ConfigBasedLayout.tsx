"use client";

import { Box, HStack, VStack } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Header from "@/components/header/Header";
import { getLayoutConfig } from "@/components/layout/layoutConfig";
import SideBar from "@/components/sidebar/SideBar";

interface ConfigBasedLayoutProps {
  children: React.ReactNode;
}

export default function ConfigBasedLayout({
  children,
}: ConfigBasedLayoutProps) {
  const pathname = usePathname();
  const config = getLayoutConfig(pathname);

  return (
    <Box bg="background.default" minH="100vh">
      <HStack align="top" gap="0">
        {config.showSidebar && <SideBar />}
        <VStack align="stretch" flex="1" h="100vh" gap="0" maxWidth="600px">
          {config.showHeader && <Header />}
          <Box flex="1" overflow="auto" maxWidth="600px">
            {children}
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}
