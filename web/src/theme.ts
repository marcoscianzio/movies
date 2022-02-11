import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { heading: "Source Sans Pro", body: "Source Sans Pro" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    movie: {
      background: "#0c1117",
      primary: "#5179ff",
      secondary: "#707ba2",
    },
  },
  styles: {
    global: {
      body: {
        bg: "movie.background",
      },
    },
  },
  fonts,
  components: {
    Tag: {
      variants: {
        outline: {
          container: {
            rounded: "full",
            boxShadow: "inset 0 0 0px 1px #707ba2",
            px: 6,
            py: 2,
            fontWeight: "bold",
            textTransform: "upperCase",
            color: "movie.secondary",
          },
        },
      },
    },
  },
  breakpoints,
});

export default theme;
