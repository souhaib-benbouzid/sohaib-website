import {
  BottomNavigationAction,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { FC, useState } from "react";

import { LanguageCode } from "src/types";
import LanguageIcon from "@mui/icons-material/Translate";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const LanguageSelect: FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation("navbar");
  const router = useRouter();

  const handleLanguageIconClick = (language: LanguageCode) => {
    const { pathname, asPath, query } = router;
    handleClose();
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: language });
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BottomNavigationAction
        label={t(text)}
        value=""
        showLabel
        icon={<LanguageIcon />}
        sx={{ ":hover": { color: "primary.main" } }}
        onClick={handleClick}
      />

      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem onClick={() => handleLanguageIconClick("en")}>
          English
        </MenuItem>
        <MenuItem onClick={() => handleLanguageIconClick("ar")}>عربي</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelect;
