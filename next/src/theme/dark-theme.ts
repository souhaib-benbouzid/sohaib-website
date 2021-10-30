import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

import { blue, green, orange, red, yellow } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
export const darkTheme = createTheme({
  direction: "ltr",
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to apply
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
  },

  typography: {
    fontFamily: "'Montserrat', sans-serif",
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
});

export default responsiveFontSizes(darkTheme);
