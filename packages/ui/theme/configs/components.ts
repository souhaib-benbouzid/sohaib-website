import { ThemeOptions } from "@mui/material";

export const components: ThemeOptions["components"] = {
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
};
