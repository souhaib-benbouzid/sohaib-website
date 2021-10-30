import {
  BottomNavigationAction,
  Menu,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { LanguageCode, MainSettings } from "src/types";

import { Box } from "@mui/system";
import LanguageIcon from "@mui/icons-material/Translate";
import { RootState } from "src/redux";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";

export const LanguageSelect: FC<{ text: string }> = ({ text }) => {
  const { t } = useTranslation("navbar");
  const router = useRouter();

  const handleLanguageIconClick = (e: SelectChangeEvent) => {
    const { pathname, asPath, query } = router;
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: e.target.value });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "revert",
          alignItems: "center",
          p: "0 30px",
          mb: 2,
        }}
      >
        <Select
          size="small"
          label="language"
          value={router.locale}
          onChange={handleLanguageIconClick}
        >
          <MenuItem value="ar">عربي</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
        <Box
          sx={{
            display: "flex",
            justifyContent: "revert",
            alignItems: "center",
            p: 2,
          }}
        >
          <LanguageIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default LanguageSelect;
