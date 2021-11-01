import { DesktopNavbarProps } from "src/components/navbar/desktop-navbar";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { MobileNavbarProps } from "src/components/navbar/mobile-navbar";

const mobileNavbarData: MobileNavbarProps["data"] = {
  items: [
    {
      text: "blog",
      icon: DriveFileRenameOutlineIcon,
      link: "/blog",
    },
    {
      text: "projects",
      icon: LaptopMacIcon,
      link: "/projects",
    },
    {
      text: "home",
      icon: HomeIcon,
      link: "/",
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
      text: "projects",
      icon: LaptopMacIcon,
      link: "/projects",
    },
    {
      text: "home",
      icon: HomeIcon,
      link: "/",
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