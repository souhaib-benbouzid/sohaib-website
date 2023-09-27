import { Grid, Typography, useTheme } from "@mui/material";

import { Box } from "@mui/system";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export type Technology = {
  Logo: any;
  alt: string;
};

export interface MainStackProps {
  title: string;
  technologies: Technology[];
}

export const MainStack: FC<MainStackProps> = ({ technologies, title }) => {
  const { t } = useTranslation("landing");
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        id="experience"
        variant="h3"
        sx={{ textAlign: "center", mb: 7, fontWeight: "bold" }}
      >
        {t(title)}
      </Typography>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        {technologies.map(({ alt, Logo }) => (
          <Grid item xs={5} md={4} lg={3} key={alt}>
            <Logo fill={theme.palette.text.primary} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
