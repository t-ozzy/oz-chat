import type { Metadata } from "next";
import "./globals.css";
import { Box } from "@chakra-ui/react";
import { GlobalThemeProvider } from "@/components/ui/GlobalThemeProvider";
import { ReduxProvider } from "@/store/provider";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";

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
            <Box bg="background.default" minH="100vh">
              <SideBar />
              <Header />
              {children}
            </Box>
          </ReduxProvider>
        </GlobalThemeProvider>
      </body>
    </html>
  );
}
