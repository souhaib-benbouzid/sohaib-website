import { Container, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import SocialNavbar from "../social-navbar";

export const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        position: "relative",
        p: { xs: 0, md: 3, lg: 6 },
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 5,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: { xs: "100%", md: "80%", lg: "60%" },
            mb: { xs: 1, md: 2, lg: 3 },
            fontWeight: "bold",
            zIndex: 5,
          }}
        >
          {t("title")}
        </Typography>
        <SocialNavbar />
      </Container>
      <Box
        sx={{
          mb: { xs: "56px", md: 0 },
          width: "100%",
          position: "absolute",
          content: `""`,
          left: 0,
          top: 0,
          bgcolor: "background.paper",
          opacity: "0.6",
          height: "100%",
          zIndex: 1,
        }}
      />
    </Box>
  );
};
