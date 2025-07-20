"use client";

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import { system } from "./theme"

export function GlobalThemeProvider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange enableSystem={false}>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  )
}
