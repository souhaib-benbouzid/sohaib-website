import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import DzcodeLogo from "./dzcode-logo";
import { FC } from "react";
import ReactPlayer from "react-player";
import { useTranslation } from "react-i18next";

export interface DzcodeProps {
  jobTitle: string;
  company: string;
  description: string;
  videoUrl: string;
}

export const Dzcode: FC<DzcodeProps> = ({
  jobTitle,
  company,
  description,
  videoUrl,
}) => {
  const { t } = useTranslation("landing");
  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={{ xs: 3, md: 6 }}
      columnSpacing={{ xs: 0, md: 4, lg: 8 }}
      minHeight="80vh"
      alignItems="center"
      flexWrap="wrap-reverse"
    >
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "grid", placeItems: "flex-start", width: "100%" }}>
          <ReactPlayer url={videoUrl} width="100%" controls />
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            placeItems: { xs: "flex-start" },
            mb: { xs: 3, lg: 3 },
            maxWidth: 600,
          }}
        >
          <DzcodeLogo />
        </Box>
        <Typography variant="h4" component="h2" sx={{ mb: { xs: 2, lg: 2 } }}>
          {t(jobTitle)}
          <Box component="span" sx={{ color: "primary.main" }}>
            {t(company)}
          </Box>
        </Typography>
        <Typography variant="body1">{t(description)}</Typography>
      </Grid>
    </Grid>
  );
};
