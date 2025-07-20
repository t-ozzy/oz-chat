"use client";

import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: {
            600: { value: "#95CC6A" },
          },
          secondary: {
            600: { value: "#8D4BBE" },
          },
        },
      },
    },
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)
