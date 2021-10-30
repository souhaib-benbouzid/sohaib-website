import "@fontsource/cairo/300.css";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/700.css";
import "@fontsource/cairo/600.css";

import { blue, green, orange, red, yellow } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Cairo, sans-serif",
    fontWeightMedium: 600,
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
    mode: "light",
    secondary: {
      main: blue[600],
      contrastText: "#fff",
    },
    primary: {
      main: orange[500],
      contrastText: "#fff",
    },
    error: {
      main: red[600],
    },
    warning: {
      main: yellow[600],
    },
    success: {
      main: green[400],
    },
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
        disableTouchRipple: true,
      },
    },
  },
});

export default responsiveFontSizes(darkTheme);
