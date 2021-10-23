import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Hidden,
  Paper,
  SvgIconTypeMap,
} from "@mui/material";
import { FC, useState } from "react";
import { LanguageSelect, ThemeSwitch } from "src/components";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

type NavbarItem = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  link: string;
};

export interface MobileNavbarProps {
  items: NavbarItem[];
  language: {
    text: string;
  };
  theme: {
    dark: string;
    light: string;
  };
}

export const MobileNavbar: FC<MobileNavbarProps> = ({
  items,
  language,
  theme,
}) => {
  const router = useRouter();
  const [value, setValue] = useState(router.asPath);
  const [open, setOpen] = useState(false);

  const { t } = useTranslation("navbar");

  const showDropdown = (path: string) => {
    setOpen(!open);
    router.push(path, undefined, { locale: router.locale });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const MAX_NAVBAR_ITEMS = 4;

  const mainIcons =
    items &&
    items
      .slice(0, MAX_NAVBAR_ITEMS)
      .map(({ link, text, icon: Icon }, index) => (
        <BottomNavigationAction
          label={t(text)}
          value={link}
          key={`${text}~${index}`}
          icon={<Icon />}
          onClick={() => showDropdown(link)}
          sx={{ ":hover": { color: "primary.main" } }}
        />
      ));

  const showMoreIcons =
    items &&
    items
      .slice(MAX_NAVBAR_ITEMS)
      .map(({ link, text, icon: Icon }, index) => (
        <BottomNavigationAction
          label={t(text)}
          value={`${text}~${index}`}
          icon={<Icon />}
          key={`${text}~${index}`}
          onClick={() => showDropdown(link)}
          sx={{ ":hover": { color: "primary.main" } }}
        />
      ));

  return (
    <Hidden mdUp>
      <Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 999 }}>
        <Box sx={{ position: "relative" }}>
          <Paper
            sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
            elevation={2}
          >
            <BottomNavigation
              sx={{ width: "100%" }}
              value={value}
              onChange={handleChange}
              showLabels
            >
              {mainIcons}
              {items.length > MAX_NAVBAR_ITEMS && (
                <BottomNavigationAction
                  label={t("more")}
                  value="more"
                  icon={<MoreVertIcon />}
                  onClick={() => setOpen(!open)}
                  sx={{ ":hover": { color: "primary.main" } }}
                />
              )}
              <LanguageSelect text={language.text} />
              <ThemeSwitch themeTexts={theme} />
            </BottomNavigation>
          </Paper>

          {open && (
            <Paper
              sx={{
                position: "absolute",
                bottom: 65,
                right: 5,
                borderRadius: "20px",
                width: 60,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              elevation={4}
            >
              <BottomNavigation
                sx={{
                  height: "auto",
                  width: 60,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
                value={value}
                onChange={handleChange}
                showLabels
              >
                {showMoreIcons}
              </BottomNavigation>
            </Paper>
          )}
        </Box>
      </Box>
    </Hidden>
  );
};
export default MobileNavbar;
