import { Container, Grid, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { FC } from "react";
import Image from "next/image";
import { PageHeader } from "src/components";
import { useTranslation } from "react-i18next";

export type Technology = {
  logo: string;
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

const AboutMe: FC<AboutMeProps> = ({
  headerTitle,
  bio,
  experience,
  mainStack,
}) => {
  const { t } = useTranslation("landing");

  const technologiesSection = (
    <Grid container alignItems="center" justifyContent="center" spacing={2}>
      {mainStack.technologies.map((tech, index) => (
        <Grid item xs={5} md={4} lg={3} key={tech.logo + index}>
          <Image src={tech.logo} alt={tech.alt} />
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
      <Typography variant="body1">{t(bio)}</Typography>

      {/* MainStack */}
      <Typography
        variant="h3"
        sx={{ textAlign: "center", mt: 12, mb: 7, fontWeight: "bold" }}
      >
        {t(mainStack.title)}
      </Typography>

      {technologiesSection}

      {/* Experience */}
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
    </Container>
  );
};

export default AboutMe;
