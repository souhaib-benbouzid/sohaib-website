import { Code, SportsEsports } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";

import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Project } from "src/types";
import { TagCard } from "../tag-card";
import article from "./article.png";

type ProjectCardProps = Project;

export const ProjectCard: FC<ProjectCardProps> = ({
  topics,
  image,
  description,
  name,
  homepage,
  html_url,
}) => {
  const { t } = useTranslation();

  return (
    <Link href={`/projects/${name}`} passHref>
      <Paper
        elevation={2}
        sx={{
          bgcolor: "#2A2E35",
          margin: "auto",
          maxWidth: "430px",
          minWidth: "280px",
          cursor: "pointer",
          transform: "translateY(0)",
          transition: "all 0.2s ease-in-out",
          ":hover": {
            transform: "translateY(-1px)",
          },
        }}
      >
        <Image
          src={image ? image : article}
          alt={name}
          objectFit="cover"
          quality={100}
          layout="intrinsic"
          width={430}
          height={230}
          placeholder="empty"
          blurDataURL="loading"
        />
        <Box sx={{ p: { xs: "20px", lg: "20px" } }}>
          <Typography
            component="h2"
            sx={{
              color: "#fff",
              m: "0 0 10px",
              fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
              fontWeight: "bold",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", m: "10px  0 20px", opacity: 0.7 }}
          >
            {description}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              m: "10px 0 8px",
              fontSize: { xs: "h5.fontSize", sm: "h4.fontSize" },
              fontWeight: "bold",
            }}
          >
            {t("Tech Stack")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              m: "8px 0 30px",
            }}
          >
            {topics?.map((tech, index) => (
              <Box key={index} sx={{ mr: 0.8, mt: 0.8 }}>
                <TagCard text={tech} />
              </Box>
            ))}
          </Box>
          <Box sx={{ width: "100%" }}>
            <a href={html_url || "#"} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                size="large"
                startIcon={<Code />}
                sx={{
                  width: "49%",
                  color: "primary.main",
                  bgcolor: "common.black",
                  borderRadius: 0,
                  pl: 0,
                  pr: 0,
                  mr: "2%",
                  ":hover": {
                    opacity: "0.9",
                    color: "common.white",
                    bgcolor: "primary.main",
                  },
                }}
              >
                {t("view code")}
              </Button>
            </a>
            <a href={homepage || "#"} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                size="large"
                startIcon={<SportsEsports />}
                sx={{
                  width: "49%",
                  pl: 0,
                  pr: 0,
                  bgcolor: "primary.main",
                  borderRadius: 0,
                  ":hover": {
                    color: "common.black",
                    opacity: "0.9",
                    bgcolor: "primary.main",
                  },
                }}
              >
                {t("Try it out")}
              </Button>
            </a>
          </Box>
        </Box>
      </Paper>
    </Link>
  );
};

export default ProjectCard;
