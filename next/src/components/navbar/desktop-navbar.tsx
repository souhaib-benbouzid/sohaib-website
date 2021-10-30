import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Hidden,
  Paper,
  Slide,
  SvgIconTypeMap,
  useScrollTrigger,
} from "@mui/material";
import { FC, useState } from "react";
import { LanguageSelect, ThemeSwitch } from "..";

import { Box } from "@mui/system";
import DescriptionIcon from "@mui/icons-material/Description";
import Link from "next/link";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Settings } from "@mui/icons-material";
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
  toggleSettingBar: () => void;
}

export const DesktopNavbar: FC<DesktopNavbarProps> = ({
  items,
  actionButton,
  toggleSettingBar,
}) => {
  const router = useRouter();
  const [value, setValue] = useState(router.asPath);
  const [open, setOpen] = useState(false);
  const changeStyle = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true,
  });
  const showNavbar = useScrollTrigger({ threshold: 300 });

  const { t } = useTranslation("navbar");

  const showDropdown = (path: string) => {
    setOpen(!open);
    router.push(path, undefined, { locale: router.locale });
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Hidden mdDown>
      <Slide appear={false} direction="down" in={!showNavbar}>
        <Paper
          className="mui-fixed"
          sx={{
            boxShadow: changeStyle ? 4 : 0,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            pl: 2,
            p: 0.5,
            pr: 2,
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: changeStyle ? 1 : 0,
              transition: "all 0.5s ease",
              backgroundColor: "background.paper",
            }}
          />

          <BottomNavigationAction
            label={t("Settings")}
            showLabel
            onClick={toggleSettingBar}
            icon={<Settings />}
          />

          <BottomNavigation
            sx={{ width: "100%", zIndex: 1, background: "transparent" }}
            value={value}
            onChange={handleChange}
          >
            {items &&
              items.map(({ link, text, icon: Icon }, index) => (
                <BottomNavigationAction
                  label={t(text)}
                  showLabel
                  value={link}
                  key={`${text}~${index}`}
                  icon={<Icon />}
                  onClick={() => showDropdown(link)}
                  sx={{ ":hover": { color: "primary.main" } }}
                />
              ))}
          </BottomNavigation>

          <Link href={actionButton.href} passHref>
            <Button
              variant="outlined"
              startIcon={<DescriptionIcon />}
              sx={{ minWidth: "fit-content" }}
              color="secondary"
            >
              {t(actionButton.text)}
            </Button>
          </Link>
        </Paper>
      </Slide>
    </Hidden>
  );
};
export default DesktopNavbar;
