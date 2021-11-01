import { DesktopNavbarProps } from "src/components/navbar/desktop-navbar";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { MobileNavbarProps } from "src/components/navbar/mobile-navbar";

const mobileNavbarData: MobileNavbarProps["data"] = {
  items: [
    {
      text: "home",
      icon: HomeIcon,
      link: "/",
    },

    {
      text: "Development",
      icon: LaptopMacIcon,
      link: "/development",
    },
    {
      text: "blog",
      icon: DriveFileRenameOutlineIcon,
      link: "/blog",
    },
  ],
};

const desktopNavbarData: DesktopNavbarProps["data"] = {
  items: [
    {
      text: "blog",
      icon: DriveFileRenameOutlineIcon,
      link: "/blog",
    },
    {
      text: "home",
      icon: HomeIcon,
      link: "/",
    },
    {
      text: "Development",
      icon: LaptopMacIcon,
      link: "/development",
    },
  ],
  actionButton: {
    text: "callToAction.text",
    href: "https://drive.google.com/file/d/1ghcwbvtZWw1lCj-loUtuEHz3rZ-mnkgq/view?usp=sharing",
  },
};

export const navbar = {
  mobileNavbarData,
  desktopNavbarData,
};
