import { AppDispatch, RootState } from "src/redux";
import { useDispatch, useSelector } from "react-redux";

import { BottomNavigationAction } from "@mui/material";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import { FC } from "react";
import { MainSettings } from "src/types";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useTranslation } from "next-i18next";

export const ThemeSwitch: FC<{ themeTexts: { dark: string; light: string } }> =
  ({ themeTexts }) => {
    const { t } = useTranslation("navbar");
    const handleClick = () => {
      dispatch({
        type: "UPDATE_SETTINGS",
        payload: { mode: mode === "dark" ? "light" : "dark" },
      });
    };
    const { mode } = useSelector<RootState, MainSettings>(
      (state) => state.mainSettings,
    );
    const dispatch = useDispatch<AppDispatch>();

    return (
      <BottomNavigationAction
        label={mode === "dark" ? t(themeTexts.dark) : t(themeTexts.light)}
        value="mode"
        showLabel
        icon={mode === "dark" ? <NightsStayIcon /> : <BrightnessHighIcon />}
        sx={{ ":hover": { lg: { color: "primary.main" } } }}
        onClick={handleClick}
      />
    );
  };

export default ThemeSwitch;
