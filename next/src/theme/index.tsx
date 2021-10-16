import { LanguageCode, MainSettings, UIMode } from "src/types";

import CssBaseline from "@mui/material/CssBaseline";
import { FC } from "react";
import { RootState } from "src/redux";
import { ThemeProvider } from "@mui/material/styles";
import arabicDarkTheme from "./arabic-dark-theme-";
import arabicLightTheme from "./arabic-light-theme";
import darkTheme from "./dark-theme";
import lightTheme from "./light-theme";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const getThemeMode = ({
  mode,
  language,
}: {
  mode: UIMode;
  language: LanguageCode;
}) => {
  const themes = {
    rtl: {
      dark: darkTheme,
      light: lightTheme,
    },
    ar: {
      dark: arabicDarkTheme,
      light: arabicLightTheme,
    },
  };

  return language === "ar" ? themes["ar"][mode] : themes["rtl"][mode];
};

const Theme: FC = (props) => {
  const { mode } = useSelector<RootState, MainSettings>(
    (state) => state.mainSettings,
  );
  const router = useRouter();
  console.log(
    getThemeMode({
      mode,
      language: (router.locale as LanguageCode) || "en",
    }),
  );

  return (
    <ThemeProvider
      theme={getThemeMode({
        mode,
        language: (router.locale as LanguageCode) || "en",
      })}
    >
      {props.children}
      <CssBaseline />
    </ThemeProvider>
  );
};

export default Theme;
