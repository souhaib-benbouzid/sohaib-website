import { FC, useState } from "react";
import { Paper, SvgIconTypeMap } from "@mui/material";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { useTranslation } from "react-i18next";

type NavigationItem = {
  text: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
};

export interface MobileNavigationProps {
  items: NavigationItem[];
}

export const MobileNavigation: FC<MobileNavigationProps> = ({ items }) => {
  const [value, setValue] = useState("recents");
  const { t } = useTranslation("navigation");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        {items &&
          items.map(({ text, icon: Icon }, index) => (
            <BottomNavigationAction
              label={t(text)}
              value={`${text}~${index}`}
              icon={<Icon />}
              key={`${text}~${index}`}
            />
          ))}
      </BottomNavigation>
    </Paper>
  );
};
export default MobileNavigation;
