import { Button, Paper, Typography } from "@mui/material";
import { Code, SportsEsports } from "@mui/icons-material";

import { Box } from "@mui/system";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { TagCard } from "../tag-card";
import article from "./article.png";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {}

export const ProjectCard: FC<ProjectCardProps> = ({}) => {
  const { t } = useTranslation();

  return (
    <Link href="/" passHref>
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
          src={article}
          alt="Stop Using Microservices. Build Monoliths Instead."
          objectFit="cover"
          quality={100}
          layout="intrinsic"
          width={430}
          height={230}
          placeholder="blur"
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
            Super Cool Project 😎
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", m: "10px  0 20px", opacity: 0.7 }}
          >
            I didn&apos;t have time to write it Yet 😅, Still working on it.
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
            Tech Stack
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
            {["typescript", "nextjs", "node", "css"].map((tech, index) => (
              <Box key={index} sx={{ mr: 0.8, mt: 0.8 }}>
                <TagCard text={tech} />
              </Box>
            ))}
          </Box>
          <Box sx={{ width: "100%" }}>
            <Link href="/" passHref>
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
                view code
              </Button>
            </Link>
            <Link href="/" passHref>
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
                Try it out
              </Button>
            </Link>
          </Box>
        </Box>
      </Paper>
    </Link>
  );
};

export default ProjectCard;
