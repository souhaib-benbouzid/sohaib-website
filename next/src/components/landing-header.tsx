import { Box, Button, Hidden, Typography } from "@mui/material";
import { Description, Email } from "@mui/icons-material";

import { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
  name: string;
  jobTitle: string;
}

const LandingHeader: FC<LandingHeaderProps> = ({
  primaryButton,
  secondaryButton,
  LandingImage,
  name,
  jobTitle,
}) => {
  const { t } = useTranslation("landing");

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 56px)",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "25px",
          zIndex: 3,
          p: 1,
          textAlign: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ mb: 2, fontWeight: "bold" }}
          component="h1"
          color="primary"
        >
          {t(name)}
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          sx={{ mb: 3, color: { xs: "#fff", md: "text.primary" } }}
        >
          {t(jobTitle)}
        </Typography>

        <Box sx={{ maxWidth: 300, width: "100%" }}>
          <a href={primaryButton.href} style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              startIcon={<Email />}
              fullWidth
              sx={{ mt: 1, mb: 1 }}
            >
              {t(primaryButton.text)}
            </Button>
          </a>
          <a href={secondaryButton.href} style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<Description />}
              fullWidth
              color="secondary"
              sx={{ mt: 1, mb: 1 }}
            >
              {t(secondaryButton.text)}
            </Button>
          </a>
        </Box>
      </Box>
      <Hidden mdUp>
        <Box
          sx={{
            position: "relative",
            height: `calc(100vh - 56px)`,
            width: "100%",
            overflow: "hidden",
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(35, 39, 45, 0) 35%, rgba(0, 0, 0, 0.4108) 50%)",
          }}
        />
        <Image
          src={LandingImage.href}
          alt=""
          quality={100}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </Hidden>
    </Box>
  );
};

export default LandingHeader;
