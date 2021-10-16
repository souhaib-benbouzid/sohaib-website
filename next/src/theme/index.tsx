import CssBaseline from "@mui/material/CssBaseline";
import { FC } from "react";
import { MainSettings } from "src/types";
import { RootState } from "src/redux";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./dark-theme";
import lightTheme from "./light-theme";
import { useSelector } from "react-redux";

const Theme: FC = (props) => {
  const { mode } = useSelector<RootState, MainSettings>(
    (state) => state.mainSettings,
  );

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      {props.children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default Theme;
