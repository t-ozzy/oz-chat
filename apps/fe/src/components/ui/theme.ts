"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          600: { value: "#95CC6A" },
        },
        secondary: {
          600: { value: "#8D4BBE" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
