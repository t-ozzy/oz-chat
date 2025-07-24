"use client";

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const primary = {
  /*
   * サイトのブランドカラー
   *
   * 50        => 背景の薄い色
   * 100 ~ 300 => 軽い強調、背景やボーダー
   * 400 ~ 600 => メインボタンやリンクの通常色
   * 700 ~ 900 => 強い強調、テキストやアイコンの濃い色、影
   */
  50: "#f2fbe9",
  100: "#FFFFFF",
  200: "#b6eb9b",
  300: "#95cc6a",
  400: "#78b450",
  500: "#5a9c36",
  600: "#3c841c",
  700: "#2c6614",
  800: "#1d490d",
  900: "#0e2b06",
};

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        fontColor: {
          main: { value: primary[900] },
          sub: { value: primary[600] },
          link: { value: primary[400] },
          lightGray: { value: "rgb(229, 229, 229)" },
          error: { value: "#FF0000" },
        },
        background: {
          default: { value: "rgb(249, 250, 251)" }, // 画面全体の背景色
          sideBar: { value: primary[50] }, // サイドバーの色
        },
        borderColor: {
          main: { value: "#EEEEEE" },
        },
        border: { value: "rgb(229, 229, 229)" },
      },
      sizes: {
        // INFO ChakraUIはデフォルトで0~96などのパラメータを用意済み
        sideBar: {
          height: { value: "100vh" },
          width: { value: "15vw" },
        },
        full: { value: "100%" }, // レイアウト全体を広げる
        min: { value: "min-content" }, // 最小幅に合わせる
        max: { value: "max-content" }, // 最大幅に合わせる
        fit: { value: "fit-content" }, // コンテンツに合わせてサイズ調整
      },
      spacing: {
        xs: { value: "2px" },
        s: { value: "4px" },
        m: { value: "6px" },
        l: { value: "10px" },
        xl: { value: "14px" },
      },
      fonts: {
        /*
         * INFO <Text fontFamily="myfont"> のようにカスタムフォントを使用することも可能
         * body    => 本文用フォント。<Text>, <Button>, <Input> etc...
         */
        body: { value: `'Noto Sans JP', system-ui, -apple-system, sans-serif` },
      },
      fontSizes: {
        xs: { value: "10px" },
        s: { value: "14px" }, // 補足テキストや小さい文字
        m: { value: "16px" }, // 標準本文サイズ
        l: { value: "20px" }, // 小見出しや強調テキスト
        xl: { value: "24px" }, // 見出し
        "2xl": { value: "32px" }, // 大見出しやタイトル
      },
      fontWeights: {
        normal: { value: "400" }, // 通常のテキスト
        medium: { value: "500" }, // 少し強調したいとき
        semibold: { value: "600" }, // 小見出しなどに
        bold: { value: "700" }, // 強調見出しやボタン文字など
      },
      radii: {
        none: { value: "0" }, // 角丸なし
        s: { value: "4px" }, // 小さめの角丸（ボタンやカードの軽い丸み）
        m: { value: "8px" }, // 中くらい（カードやモーダルの角丸）
        l: { value: "16px" }, // 大きめ（プロフィール画像の丸みなど）
        full: { value: "9999px" }, // 完全な丸（丸型のアバターやボタン）
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
