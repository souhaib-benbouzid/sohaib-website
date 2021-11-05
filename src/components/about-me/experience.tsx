import { Box } from "@mui/system";
import { FC } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export type Experience = {
  time: string;
  jobTitle: string;
  secondTitle: string;
  descriptions: string[];
};

const Experience: FC<Experience> = ({
  descriptions,
  jobTitle,
  secondTitle,
  time,
}) => {
  const { t } = useTranslation("landing");
  return (
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
        sx={{ mb: 2, opacity: "60%", fontWeight: "bold" }}
      >
        {t(secondTitle)}
      </Typography>
      <Box component="ul" sx={{ pl: { xs: "20px", md: "30px" } }}>
        {descriptions.map((paragraph, index) => (
          <li key={index}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {t(paragraph)}
            </Typography>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export interface ExperienceSectionProps {
  title: string;
  experiences: Experience[];
  endLine: string;
}

export const ExperienceSection: FC<ExperienceSectionProps> = ({
  endLine,
  experiences,
  title,
}) => {
  const { t } = useTranslation("landing");

  return (
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
        {t(title)}
      </Typography>

      {experiences.map((experience) => (
        <Experience {...experience} key={experience.jobTitle} />
      ))}

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
          {t(endLine)}
        </Typography>
      </Box>
    </Box>
  );
};
