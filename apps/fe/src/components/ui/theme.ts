import { extendTheme } from "@chakra-ui/react";
import baseTheme from "./baseTheme";

const theme = extendTheme({
  ...baseTheme,
  config: {
    cssVarPrefix: "ck",
  },
});

export default theme;
