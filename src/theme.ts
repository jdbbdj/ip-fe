import { extendTheme } from "native-base";

const config = {
  useSystemColorMode: false,
  initialColorMode: "light"
};

const colors = {
  primary: {
    50: "#EEF2F6",
    100: "#CFD9E7",
    200: "#B1C1D8",
    300: "#92A9C9",
    400: "#7491B9",
    500: "#5578AA",
    600: "#446088",
    700: "#334866",
    800: "#223044",
    900: "#111822"
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic"
      },
      200: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic"
      },
      300: {
        normal: "Roboto-Light",
        italic: "Roboto-LightItalic"
      },
      400: {
        normal: "Roboto-Regular",
        italic: "Roboto-Italic"
      },
      500: {
        normal: "Roboto-Medium"
      },
      600: {
        normal: "Roboto-Medium",
        italic: "Roboto-MediumItalic"
      }
    }
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    mono: "Roboto"
  }
};

export default extendTheme({
  config,
  colors
});
