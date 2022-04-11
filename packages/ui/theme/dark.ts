import { createTheme } from "@mui/material";
import { configs } from "./configs";
import { darkPalette } from "./palettes/dark";

export const darkTheme = createTheme({
  ...configs,
  palette: darkPalette,
});
