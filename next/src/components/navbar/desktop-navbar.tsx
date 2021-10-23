import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Hidden,
  Paper,
  SvgIconTypeMap,
} from "@mui/material";
import { FC, useState } from "react";
import { LanguageSelect, ThemeSwitch } from "..";

import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";
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

export interface DesktopNavbarProps {
  items: NavbarItem[];
  actionButton: {
    text: string;
    href: string;
  };
  language: {
    text: string;
  };
  theme: {
    dark: string;
    light: string;
  };
}

export const DesktopNavbar: FC<DesktopNavbarProps> = ({
  items,
  actionButton,
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

  const mainIcons =
    items &&
    items.map(({ link, text, icon: Icon }, index) => (
      <BottomNavigationAction
        label={t(text)}
        value={link}
        key={`${text}~${index}`}
        icon={<Icon />}
        onClick={() => showDropdown(link)}
        sx={{ ":hover": { color: "primary.main" } }}
      />
    ));

  return (
    <Hidden mdDown>
      <Paper
        elevation={1}
        className="mui-fixed"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pl: 2,
          pr: 2,
          zIndex: 999,
        }}
      >
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
          showLabels
        >
          {mainIcons}
          <LanguageSelect text={language.text} />
          <ThemeSwitch themeTexts={theme} />
        </BottomNavigation>
        <Link href={actionButton.href} passHref>
          <Button
            variant="contained"
            startIcon={<DescriptionIcon />}
            sx={{ minWidth: "fit-content" }}
          >
            {t(actionButton.text)}
          </Button>
        </Link>
      </Paper>
    </Hidden>
  );
};
export default DesktopNavbar;
