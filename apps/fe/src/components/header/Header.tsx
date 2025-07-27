"use client";

import { Box, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { headerPathList } from "./headerPathList";

export default function Header() {
  const pathname = usePathname();
  const matchedPath = headerPathList.find((item) => item.match(pathname));

  if (!matchedPath) {
    console.error(
      `Header configuration not found for pathname: ${pathname}. Please add configuration to headerPathList.`,
    );
  }

  return (
    <header>
      <Box
        background="background.default"
        borderBottomWidth="2px"
        borderColor="border"
        padding="16px"
        display="flex"
      >
        {matchedPath?.link ? (
          <Link as={NextLink} href={matchedPath.link}>
            <Text fontSize="l" fontWeight="bold">
              {matchedPath?.context}
            </Text>
          </Link>
        ) : (
          <Text fontSize="l" fontWeight="bold">
            {matchedPath?.context}
          </Text>
        )}
      </Box>
    </header>
  );
}
