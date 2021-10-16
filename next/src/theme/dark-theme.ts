import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/700.css";

import { blue, green, orange, red, yellow } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
export const darkTheme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    h1: {
      fontSize: "4.5rem",
    },
    h2: {
      fontSize: "3.5rem",
    },
    h3: {
      fontSize: "2.7rem",
    },
    h4: {
      fontSize: "2.2rem",
    },
  },
  palette: {
    mode: "dark",
    secondary: {
      main: orange[900],
      contrastText: "#fff",
    },
    primary: {
      main: blue[600],
      contrastText: "#fff",
    },
    error: {
      main: red[700],
    },
    warning: {
      main: yellow[600],
    },
    success: {
      main: green[500],
    },
  },
});

export default responsiveFontSizes(darkTheme);
