import { Grid, Typography } from "@mui/material";
import React, { FC } from "react";

import { Box } from "@mui/system";
import Image from "next/image";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";

export interface WhoIsSouhaibProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

export const WhoIsSouhaib: FC<WhoIsSouhaibProps> = ({
  title,
  description,
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
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "grid",
            placeItems: {
              xs: "center",
              md: "flex-start",
            },
            width: "100%",
          }}
        >
          <Image
            src={src}
            alt={alt}
            layout="intrinsic"
            height={400}
            width={300}
            className={style.image}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
          {t(title)}
        </Typography>
        <Typography variant="body1">{t(description)}</Typography>
      </Grid>
    </Grid>
  );
};
