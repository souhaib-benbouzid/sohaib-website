import { Container, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import SocialNavbar from "../social-navbar";

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
          position: "relative",
          p: { xs: 0, md: 3, lg: 6 },
        }}
      >
        <Container>
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
