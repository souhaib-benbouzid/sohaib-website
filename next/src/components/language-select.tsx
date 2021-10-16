import { MenuItem, Select } from "@mui/material";

import { LanguageCode } from "src/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const router = useRouter();
  const handleChange = (language: LanguageCode) => {
    router.push(router.asPath, undefined, { locale: language });
  };
  return (
    <>
      <Select
        label="change language"
        value={i18n.language ?? "en"}
        onChange={(e) => handleChange(e.target.value as LanguageCode)}
      >
        <MenuItem value="en">english</MenuItem>
        <MenuItem value="ar">عربي</MenuItem>
      </Select>
    </>
  );
};

export default LanguageSelect;
