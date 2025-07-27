import type { Metadata } from "next";
import "./globals.css";
import ConfigBasedLayout from "@/components/layout/ConfigBasedLayout";
import { GlobalThemeProvider } from "@/components/ui/GlobalThemeProvider";
import { ReduxProvider } from "@/store/provider";

export const metadata: Metadata = {
  title: "oz-chat",
  description: "Created by oz-team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <GlobalThemeProvider>
          <ReduxProvider>
            <ConfigBasedLayout>{children}</ConfigBasedLayout>
          </ReduxProvider>
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
