import { Box } from "@mui/material";
import Link from "next/link";
import arrowBlack from "src/assets/svg/arrow-black.svg";
import arrowWhite from "src/assets/svg/arrow-white.svg";

const contactNavigation = [
  {
    href: "https://www.linkedin.com/in/souhaib-benbouzid/",
    text: "LinkedIn",
  },
  {
    href: "mailto:sohaib.code@gmail.com",
    text: "Email",
  },

  {
    href: "https://www.facebook.com/souhaibbenbouzid/",
    text: "Facebook",
  },
  {
    href: "https://github.com/Souhaib-Benbouzid",
    text: "Github",
  },
];

const SocialNavbar = () => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      flexDirection: { xs: "column", md: "row" },
    }}
  >
    {contactNavigation.map(({ href, text }) => (
      <Link href={href} passHref key={text}>
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
          {text}
        </Box>
      </Link>
    ))}
  </Box>
);

export default SocialNavbar;
