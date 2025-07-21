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
      sizes: {
        // INFO ChakraUIはデフォルトで0~96などのパラメータを容易済み
        header: { value: "4rem" }, // 固定ヘッダー
        footer: { value: "5rem" }, // フッターやモバイルタブ
        sidebar: { value: "16rem" }, // ナビゲーションなど
        card: { value: "22rem" }, // 投稿カードやプロフィールカード
        avatar: { value: "3rem" }, // ユーザーアイコン
        postImage: { value: "30rem" }, // 投稿画像の最大幅
        formWidth: { value: "20rem" }, // 投稿フォームやログインフォーム

        full: { value: "100%" }, // レイアウト全体を広げる
        min: { value: "min-content" }, // 最小幅に合わせる
        max: { value: "max-content" }, // 最大幅に合わせる
        fit: { value: "fit-content" }, // コンテンツに合わせてサイズ調整
      },
      spacing: {
        gutter: { value: "1rem" }, // 一般的な左右の余白
        section: { value: "2rem" }, // セクション間の上下余白
        cardPadding: { value: "1rem" }, // 投稿カードやプロフィールカードの内側余白
        cardGap: { value: "0.75rem" }, // カード内の要素間隔
        contentGap: { value: "1.25rem" }, // 投稿とコメントの間隔
        avatarMargin: { value: "0.5rem" }, // アイコンとテキストの間隔
        commentIndent: { value: "1.5rem" }, // コメントのインデント
      },
      fonts: {
        /* heading => 見出し用フォント。<Heading> etc...
         * body    => 本文用フォント。<Text>, <Button>, <Input> etc...
         * mono    =>  // 等幅フォント(コード表示系)。<Code>, <Kbd> etc...
         *
         * INFO <Text fontFamily="myfont"> のようにカスタムフォントを使用することも可能
         */
        heading: { value: `'M PLUS Rounded 1c', sans-serif` },
        body: { value: `'Noto Sans JP', system-ui, -apple-system, sans-serif` },
        mono: { value: `'Fira Code', monospace` },
      },
      fontSizes: {
        s: { value: "0.875rem" }, // 補足テキストや小さい文字
        m: { value: "1rem" }, // 標準本文サイズ
        l: { value: "1.25rem" }, // 小見出しや強調テキスト
        xl: { value: "1.5rem" }, // 見出し
        "2xl": { value: "2rem" }, // 大見出しやタイトル
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
