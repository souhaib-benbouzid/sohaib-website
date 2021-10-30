import { FC, useState } from "react";

import { Box } from "@mui/system";
import { DesktopNavbar } from "./desktop-navbar";
import { DesktopNavbarProps } from "./desktop-navbar";
import { Hidden } from "@mui/material";
import { MobileNavbar } from "./mobile-navbar";
import { MobileNavbarProps } from "./mobile-navbar";
import { SettingsMenu } from "../settings-menu";

interface Props {
  desktopNavbarData: DesktopNavbarProps;
  mobileNavbarData: MobileNavbarProps;
}

const NavBar: FC<Props> = ({ desktopNavbarData, mobileNavbarData }) => {
  const [openSidebar, setOpenSideBar] = useState(false);
  const toggle = () => setOpenSideBar(!openSidebar);

  return (
    <>
      <DesktopNavbar {...desktopNavbarData} toggleSettingBar={toggle} />
      <MobileNavbar {...mobileNavbarData} toggleSettingBar={toggle} />
      <SettingsMenu open={openSidebar} toggle={toggle} />

      <Hidden mdDown>
        <Box sx={{ pt: "56px", background: "transparent" }} />
      </Hidden>
    </>
  );
};

export default NavBar;
