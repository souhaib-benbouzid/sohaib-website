import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import HomeIcon from "@mui/icons-material/Home";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { MobileNavigationProps } from "src/components/mobile-navigation";

export const mobileNavigationData: MobileNavigationProps = {
  items: [
    {
      text: "blog",
      icon: DriveFileRenameOutlineIcon,
    },
    {
      text: "home",
      icon: HomeIcon,
    },
    {
      text: "projects",
      icon: LaptopMacIcon,
    },
  ],
};
