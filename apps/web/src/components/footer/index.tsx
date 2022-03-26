import { Container, Typography } from "@mui/material";

import { Box } from "@mui/system";
import SocialNavbar from "../social-navbar";
import { useTranslation } from "react-i18next";

interface Props {
  text: string;
}

export const Footer = ({ text }: Props) => {
  const { t } = useTranslation("footer");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "primary.main",
          position: "relative",
          p: { xs: 3, md: 6, lg: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{
              width: { xs: "100%", md: "80%", lg: "60%" },
              mb: { xs: 1, md: 2, lg: 3 },
              fontWeight: "bold",
            }}
          >
            {t(text)}
          </Typography>

          <SocialNavbar />
        </Container>
      </Box>

      <Box sx={{ mb: { xs: "56px", md: 0 } }} />
    </>
  );
};
