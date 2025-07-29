"use client";

import { Box, Center, HStack, VStack } from "@chakra-ui/react";
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
    <Box bg="background.sub" minH="100vh">
      <Center>
        <HStack align="top" gap="0">
          {config.showSidebar && <SideBar />}
          <VStack align="stretch" width="mainContent.width" flex="1" h="mainContent.height" gap="0">
            {config.showHeader && <Header />}
            <Box
              flex="1"
              overflow="auto"
              css={{
                "&::-webkit-scrollbar": { display: "none" }, // Chrome等
                scrollbarWidth: "none", // Firefox
              }}
            >
              {children}
            </Box>
          </VStack>
        </HStack>
      </Center>
    </Box>
  );
}
