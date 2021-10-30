import { Box } from "@mui/material";
import Link from "next/link";
import arrowBlack from "src/assets/svg/arrow-black.svg";
import arrowWhite from "src/assets/svg/arrow-white.svg";

const SocialNavbar = () => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      flexDirection: { xs: "column", md: "row" },
    }}
  >
    {["LinkedIn", "Github", "Facebook"].map((link, index) => (
      <Link href="/" passHref key={index}>
        <Box
          sx={{
            position: "relative",
            mr: { xs: 2, md: 6 },
            pt: 1,
            fontWeight: "bold",
            cursor: "pointer",
            ":hover": {
              opacity: 1,

              ":after": {
                transform: (theme) =>
                  theme.direction === "rtl" ? `rotate(180deg)` : undefined,
                position: "absolute",
                content: "' '",
                left: -25,
                top: "11px",
                backgroundImage: (theme) =>
                  theme.palette.mode === "dark"
                    ? `url(${arrowWhite.src})`
                    : `url(${arrowBlack.src})`,
                backgroundSize: `18px 18px`,
                height: 18,
                width: 18,
              },
            },
          }}
        >
          {link}
        </Box>
      </Link>
    ))}
  </Box>
);

export default SocialNavbar;
