import { FC, useState } from "react";

import { Hidden } from "@mui/material";
import { Box } from "@mui/system";
import { navbar } from "src/data/navbar";
import { DesktopNavbar } from "./desktop-navbar";
import { MobileNavbar } from "./mobile-navbar";
import { SettingsMenu } from "./settings-menu";

const NavBar: FC = () => {
  const { desktopNavbarData, mobileNavbarData } = navbar;
  const [openSidebar, setOpenSideBar] = useState(false);
  const toggle = () => setOpenSideBar(!openSidebar);

  return (
    <>
      <DesktopNavbar data={desktopNavbarData} toggleSettingBar={toggle} />
      <MobileNavbar data={mobileNavbarData} toggleSettingBar={toggle} />
      <SettingsMenu open={openSidebar} toggle={toggle} />

      <Hidden mdDown>
        <Box sx={{ pt: "56px", background: "transparent" }} />
      </Hidden>
    </>
  );
};

export default NavBar;
