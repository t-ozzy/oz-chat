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
      <Box px="6" py="4" background="background.default">
        {matchedPath?.link ? (
          <Link as={NextLink} href={matchedPath.link}>
            <Text fontSize="3xl" fontWeight="bold">
              {matchedPath?.context}
            </Text>
          </Link>
        ) : (
          <Text fontSize="3xl" fontWeight="bold">
            {matchedPath?.context}
          </Text>
        )}
      </Box>
    </header>
  );
}
