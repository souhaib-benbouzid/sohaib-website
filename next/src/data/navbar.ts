import { DesktopNavbarProps } from "src/components/navbar/desktop-navbar";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { MobileNavbarProps } from "src/components/navbar/mobile-navbar";

const mobileNavbarData: MobileNavbarProps = {
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
      text: "projects",
      icon: LaptopMacIcon,
      link: "/projects",
    },
  ],
  language: {
    text: "language",
  },
};

const desktopNavbarData: DesktopNavbarProps = {
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
      text: "projects",
      icon: LaptopMacIcon,
      link: "/projects",
    },
  ],
  actionButton: {
    text: "callToAction.text",
    href: "http://example.com",
  },
  language: {
    text: "language",
  },
};

export const navbar = {
  mobileNavbarData,
  desktopNavbarData,
};
