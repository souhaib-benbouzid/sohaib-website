import { createTheme } from "@mui/material";
import { configs } from "./configs";
import { lightPalette } from "./palettes/light";

export const lightTheme = createTheme({
  ...configs,
  palette: lightPalette,
});
