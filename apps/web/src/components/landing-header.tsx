import { Box, Button, Hidden, Typography } from "@mui/material";

import { Email } from "@mui/icons-material";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Image from "next/image";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import arrowBlack from "src/assets/svg/arrow-black.svg";
import arrowWhite from "src/assets/svg/arrow-white.svg";
import SocialNavbar from "src/components/social-navbar";
import styles from "./landing.module.css";

export interface LandingHeaderProps {
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  LandingImage: {
    href: StaticImageData | string;
  };
  welcomeText: string;
  mainText: string;
  specialText: string;
  mainText2: string;
  jobTitle: string;
  secondaryTitle: string;
  scrollText: string;
}

const LandingHeader: FC<LandingHeaderProps> = ({
  primaryButton,
  secondaryButton,
  LandingImage,

  welcomeText,
  mainText,
  specialText,
  mainText2,
  jobTitle,
  secondaryTitle,
  scrollText,
}) => {
  const { t } = useTranslation("landing");
  return (
    <>
      <Box
        sx={{
          height: "calc( 100vh - 56px)",
          p: {
            xs: "0 5%",
            lg: "0 0 56px 20%",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", letterSpacing: "-0.13ch" }}
        >
          {t(welcomeText)}
          {/* Hi , */}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", letterSpacing: "-0.13ch" }}
        >
          {t(mainText)}
          <Box component="span" sx={{ color: "primary.main" }}>
            {t(specialText)}
          </Box>
          {t(mainText2)}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", letterSpacing: "-0.13ch" }}
        >
          {t(jobTitle)}
        </Typography>
        <Typography
          component="h5"
          sx={{
            fontSize: "1.2rem",
            maxWidth: "60rem",
            fontWeight: 500,
            letterSpacing: "0.10ch",
            color: "text.primary",
            m: "30px 0 30px",
            opacity: 0.7,
          }}
        >
          {t(secondaryTitle)}
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            startIcon={<Email />}
            disableElevation
            fullWidth
            color="primary"
            href={primaryButton.href}
            sx={{
              mb: 1,
              p: 1,
              mr: {
                lg: 1,
                s: 1,
                xs: 1,
              },
              borderRadius: 0,
              maxWidth: 300,
              fontWeight: "bold",
            }}
          >
            {t(primaryButton.text)}
          </Button>
          <Button
            variant="outlined"
            startIcon={<LaptopMacIcon />}
            disableElevation
            fullWidth
            color="info"
            href={secondaryButton.href}
            sx={{
              mb: 1,
              p: 1,

              borderRadius: 0,
              maxWidth: 300,
              fontWeight: "bold",
            }}
          >
            {t(secondaryButton.text)}
          </Button>
        </Box>

        <Hidden mdDown>
          <Box sx={{ position: "absolute", left: "5%", bottom: 30 }}>
            <SocialNavbar />
          </Box>
        </Hidden>
        <Box
          className={styles.scrollDown}
          sx={{
            position: "absolute",
            right: 10,
            bottom: 20,
            flexDirection: "column",

            display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            sx={{
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "-0.05ch",
              writingMode: "vertical-lr",
            }}
          >
            {t(scrollText)}
          </Box>
          <Box
            sx={{
              display: (theme) =>
                theme.palette.mode === "dark" ? "grid" : "none",
              mt: 2,
              transform: "rotate(90deg)",
              placeItems: "center",
            }}
          >
            <Image src={arrowWhite} alt="" />
          </Box>
          <Box
            sx={{
              transform: "rotate(90deg)",
              mt: 2,
              display: (theme) =>
                theme.palette.mode === "dark" ? "none" : "grid",
              placeItems: "center",
            }}
          >
            <Image src={arrowBlack} alt="" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LandingHeader;
