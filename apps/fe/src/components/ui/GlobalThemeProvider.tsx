"use client";

import { ChakraProvider } from "@chakra-ui/react"
import { CacheProvider } from "@chakra-ui/next-js";
import { system } from "./theme"

export function GlobalThemeProvider(props: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider value={system}>
        {props.children}
      </ChakraProvider>
    </CacheProvider>
  )
}
