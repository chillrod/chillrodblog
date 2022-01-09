import { extendTheme, ThemeConfig } from "@chakra-ui/react";
export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};

export default customTheme;
