import { LanguageSelect, ThemeSwitch } from "..";
import React, { FC } from "react";

import { Box } from "@mui/system";
import { Drawer } from "@mui/material";

interface Props {
  open: boolean;
  toggle: () => void;
}

export const SettingsMenu: FC<Props> = ({ open, toggle }) => {
  return (
    <Drawer open={open} onClose={toggle}>
      <Box sx={{ pt: 6 }}>
        <ThemeSwitch
          themeTexts={{
            dark: "dark",
            light: "light",
          }}
        />
        <LanguageSelect text={"language"} />
      </Box>
    </Drawer>
  );
};
