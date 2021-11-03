import { Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { FC } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";

export interface EmploiticProps {
  jobTitle: string;
  company: string;
  description: string;
  videoUrl: string;
  image: {
    src: string;
    alt: string;
  };
}

export const Emploitic: FC<EmploiticProps> = ({
  jobTitle,
  company,
  description,
  videoUrl,
  image: { src, alt },
}) => {
  const { t } = useTranslation("landing");

  return (
    <Grid
      container
      justifyContent="center"
      rowSpacing={{ xs: 3, md: 6 }}
      columnSpacing={{ xs: 0, md: 4, lg: 8 }}
      alignItems="center"
      minHeight="80vh"
    >
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
          <Image
            src={src}
            alt={alt}
            layout="intrinsic"
            width={200}
            height={37}
            className={style.image}
          />
        </Box>
        <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
          {t(jobTitle)}
          <Box component="span" sx={{ color: "primary.main" }}>
            {t(company)}
          </Box>
        </Typography>
        <Typography variant="body1">{t(description)}</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box sx={{ display: "grid", placeItems: "flex-start", width: "100%" }}>
          <ReactPlayer url={videoUrl} width="100%" controls />
        </Box>
      </Grid>
    </Grid>
  );
};
