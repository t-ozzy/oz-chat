"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          /*
           * サイトのブランドカラー
           *
           * 50        => 背景の薄い色
           * 100 ~ 300 => 軽い強調、背景やボーダー
           * 400 ~ 600 => メインボタンやリンクの通常色
           * 700 ~ 900 => 強い強調、テキストやアイコンの濃い色、影
           */
          50: { value: "#f2fbe9" },
          100: { value: "#d4f3c2" },
          200: { value: "#b6eb9b" },
          300: { value: "#95cc6a" },
          400: { value: "#78b450" },
          500: { value: "#5a9c36" },
          600: { value: "#3c841c" },
          700: { value: "#2c6614" },
          800: { value: "#1d490d" },
          900: { value: "#0e2b06" },
        },
        secondary: {
          /*
           * サイトのアクセントカラー
           *
           * 100 ~ 200 => 背景の薄い色やライトな強調色
           * 300 ~ 400 => 軽い強調やボーダー、背景
           * 500 ~ 700 => メインボタンやリンクの通常色、テキストやアイコンの濃い色
           */
          100: { value: "#f4e9ff" },
          200: { value: "#dabdff" },
          300: { value: "#b28cff" },
          400: { value: "#8d4bbe" },
          500: { value: "#702da0" },
          600: { value: "#5a2383" },
          700: { value: "#441965" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
