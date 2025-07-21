"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { system } from "./theme";

export function GlobalThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true}>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ThemeProvider>
  );
}
