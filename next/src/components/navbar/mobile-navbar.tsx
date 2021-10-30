import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Hidden,
  Paper,
  SvgIconTypeMap,
} from "@mui/material";
import { FC, useState } from "react";

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

export interface MobileNavbarProps {
  items: NavbarItem[];
  toggleSettingBar: () => void;
}

export const MobileNavbar: FC<MobileNavbarProps> = ({
  items,
  toggleSettingBar,
}) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { t } = useTranslation("navbar");

  const showDropdown = (path: string) => {
    setOpen(!open);
    router.push(path, undefined, { locale: router.locale });
  };

  const MAX_NAVBAR_ITEMS = 4;

  return (
    <Hidden mdUp>
      <Box
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999 }}
      >
        <Box sx={{ position: "relative" }}>
          <Paper
            sx={{
              display: "flex",
              position: "fixed",
              bottom: 0,
              left: 0,
              right: 0,
            }}
            elevation={4}
          >
            <BottomNavigation
              sx={{ width: "100%", bgcolor: "transparent" }}
              value={router.asPath}
            >
              {items &&
                items
                  .slice(0, MAX_NAVBAR_ITEMS)
                  .map(({ link, text, icon: Icon }, index) => (
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
              <BottomNavigationAction
                label={t("Settings")}
                showLabel
                value=""
                onClick={toggleSettingBar}
                icon={<Settings />}
              />
            </BottomNavigation>
          </Paper>
        </Box>
      </Box>
    </Hidden>
  );
};
export default MobileNavbar;
