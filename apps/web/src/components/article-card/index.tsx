import { Button, Paper, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { TagCard } from "../tag-card";
import article from "./article.png";
import styles from "./style.module.css";
import { useTranslation } from "react-i18next";

interface ArticleCardProps {}

export const ArticleCard: FC<ArticleCardProps> = ({}) => {
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
          borderRadius: 3,
          transform: "translateY(0)",
          transition: "all 0.2s ease-in-out",
          ":hover": {
            transform: "translateY(-2px)",
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
          className={styles.image}
        />
        <Box sx={{ p: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            {["typescript", "nextjs", "node", "css"].map((tech, index) => (
              <Box key={index} sx={{ mr: 0.8, mt: 0.8 }}>
                <TagCard text={tech} />
              </Box>
            ))}
          </Box>
          <Typography
            component="h2"
            sx={{
              color: "#fff",
              m: "15px 0 10px",
              fontSize: { xs: "h5.fontSize", fontWeight: "bold" },
            }}
          >
            What should i put here 🤔
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", m: "10px 0px 0", opacity: 0.7 }}
          >
            I didn&apos;t have time to write it Yet 😅, Still working on it.
          </Typography>
        </Box>
        <Link href="/" passHref>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "100%",
              bgcolor: "common.black",
              borderRadius: 0,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              ":hover": {
                color: "common.black",
                opacity: "0.8",
                bgcolor: "primary.main",
              },
            }}
          >
            Read Article
          </Button>
        </Link>
      </Paper>
    </Link>
  );
};

export default ArticleCard;
