import { Box, styled } from "@mui/system";
import { Container, Grid, Typography, useTheme } from "@mui/material";

import Dzcode from "./dzcode";
import { FC } from "react";
import Image from "next/image";
import { PageHeader } from "src/components";
import ReactPlayer from "react-player";
import emploiticLogo from "src/assets/png/emploitic.logo.png";
import myPhoto from "src/assets/jpg/pic.jpg";
import style from "./style.module.css";
import { useTranslation } from "react-i18next";

export type Technology = {
  Logo: any;
  alt: string;
};

export type Experience = {
  time: string;
  jobTitle: string;
  secondTitle: string;
  descriptions: string[];
};

export interface AboutMeProps {
  headerTitle: string;
  bio: string;
  mainStack: {
    title: string;
    technologies: Technology[];
  };

  experience: {
    title: string;
    experiences: Experience[];
    endLine: string;
  };
}

const DzcodeStyled = styled(Dzcode)(({ theme }) => ({
  fill: theme.palette.mode === "dark" ? "white" : "black",
  maxWidth: 200,
  maxHeight: 37,

  width: "100%",
}));

const StyledDivider = () => (
  <Box
    sx={{
      width: "20%",
      bgcolor: "primary.main",
      height: "2px",
      m: "auto",
      mb: 7,
      mt: 7,
      borderRadius: "100px",
    }}
  />
);

const AboutMe: FC<AboutMeProps> = ({
  headerTitle,
  bio,
  experience,
  mainStack,
}) => {
  const { t } = useTranslation("landing");
  const theme = useTheme();
  const technologiesSection = (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      {mainStack.technologies.map(({ alt, Logo }) => (
        <Grid item xs={5} md={4} lg={3} key={alt}>
          <Logo fill={theme.palette.text.primary} />
        </Grid>
      ))}
    </Grid>
  );

  const experiencesSection = experience.experiences.map(
    ({ descriptions, jobTitle, secondTitle, time }) => (
      <Box
        position="relative"
        sx={{
          pl: "40px",
          pb: "40px",
          ":before": {
            content: "''",
            width: 25,
            height: 25,
            bgcolor: "primary.main",
            borderRadius: "50%",
            position: "absolute",
            top: 6,
            left: 0,
          },
          ":after": {
            content: "''",
            width: "6px",
            height: "100%",
            bgcolor: "primary.main",
            margin: "auto",
            position: "absolute",
            top: "24px",
            left: "10px",
          },
        }}
        key={`${jobTitle}~${secondTitle}`}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{ mb: 2, color: "primary.main" }}
        >
          {t(time)}
        </Typography>
        <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
          {t(jobTitle)}
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ mb: 2, opacity: "70%", fontWeight: "light" }}
        >
          {t(secondTitle)}
        </Typography>
        {descriptions.map((paragraph, index) => (
          <Typography key={index} variant="body1" sx={{ mb: 2 }}>
            {t(paragraph)}
          </Typography>
        ))}
      </Box>
    ),
  );

  return (
    <Container maxWidth="lg">
      <PageHeader title={t(headerTitle)} />

      <Grid
        container
        justifyContent="center"
        rowSpacing={{ xs: 3, md: 6 }}
        columnSpacing={{ xs: 3, lg: 8 }}
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
              src={myPhoto}
              alt="souhaib photo"
              layout="intrinsic"
              height={400}
              width={300}
              className={style.image}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
            Who is Souhaib ?
          </Typography>
          <Typography variant="body1">{t(bio)}</Typography>
        </Grid>
      </Grid>

      <StyledDivider />

      <Grid
        container
        justifyContent="center"
        rowSpacing={{ xs: 3, md: 6 }}
        columnSpacing={{ xs: 3, lg: 8 }}
        alignItems="center"
        minHeight="80vh"
      >
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              placeItems: {
                xs: "flex-start",
              },
              mb: { xs: 3, lg: 3 },
              maxWidth: 600,
            }}
          >
            <Image
              src={emploiticLogo}
              alt="souhaib photo"
              layout="intrinsic"
              width={200}
              height={37}
              className={style.image}
            />
          </Box>

          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            Full Stack Developer at{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Emploitic
            </Box>
          </Typography>

          <Typography variant="body1">{t(bio)}</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: "grid", placeItems: "flex-start", width: "100%" }}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=SiS-avtDBkk&t=66s"
              width="100%"
              controls
            />
          </Box>
        </Grid>
      </Grid>

      <StyledDivider />

      <Grid
        container
        justifyContent="center"
        rowSpacing={{ xs: 3, md: 6 }}
        columnSpacing={{ xs: 3, lg: 8 }}
        minHeight="80vh"
        alignItems="center"
        flexWrap="wrap-reverse"
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{ display: "grid", placeItems: "flex-start", width: "100%" }}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=6yQcHrcDXZ8&t=55s"
              width="100%"
              controls
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              placeItems: {
                xs: "flex-start",
              },
              mb: { xs: 3, lg: 3 },
              maxWidth: 600,
            }}
          >
            <DzcodeStyled />
          </Box>
          <Typography variant="h4" component="h2" sx={{ mb: { xs: 2, lg: 2 } }}>
            Maintainer at{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              dzCode.io
            </Box>
          </Typography>

          <Typography variant="body1">{t(bio)}</Typography>
        </Grid>
      </Grid>

      <StyledDivider />
      {/* MainStack */}
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
          variant="h3"
          sx={{ textAlign: "center", mb: 7, fontWeight: "bold" }}
        >
          {t(mainStack.title)}
        </Typography>

        {technologiesSection}
      </Box>

      <StyledDivider />
      {/* Experience */}
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mb: 12,
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mt: 12, mb: 7, fontWeight: "bold" }}
        >
          {t(experience.title)}
        </Typography>

        {experiencesSection}

        <Box
          position="relative"
          sx={{
            pl: "40px",
            ":before": {
              content: "''",
              width: 25,
              height: 25,
              bgcolor: "primary.main",
              borderRadius: "50%",
              position: "absolute",
              top: 6,
              left: 0,
            },
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{ mb: 2, color: "primary.main" }}
          >
            {t(experience.endLine)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
