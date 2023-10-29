import { Box } from "@mui/system";
import { FC } from "react";

type Technology = {
  textColor: string;
  backgroundColor: string;
};

const techColors: Record<string, Technology> = {
  React: {
    backgroundColor: "#000000",
    textColor: "#00d8ff",
  },
  nextjs: {
    backgroundColor: "#000000",
    textColor: "#fff",
  },
  docker: {
    backgroundColor: "#2496ed",
    textColor: "#fff",
  },
  node: {
    backgroundColor: "#90c53f",
    textColor: "#000000",
  },
  css: {
    backgroundColor: "#f954be",
    textColor: "#fff",
  },
  javascript: {
    backgroundColor: "#f0db4f",
    textColor: "#000000",
  },
  TypeScript: {
    backgroundColor: "#2775c3",
    textColor: "#fff",
  },
  Go: {
    backgroundColor: "#73DCE6",
    textColor: "#000000",
  },
};

interface TagCardProps {
  text: string;
}

export const TagCard: FC<TagCardProps> = ({ text }) => {
  const colors = techColors[text] || {
    backgroundColor: "#000000",
    textColor: "#fff",
  };

  return (
    <Box
      dir="ltr"
      sx={{
        bgcolor: colors.backgroundColor,
        color: colors.textColor,
        minWidth: "fit-content",
        p: 0.4,
        pl: 0.8,
        pr: 0.8,
        letterSpacing: ".15ch",
        fontSize: 12,
        fontWeight: 800,
      }}
    >
      {text}
    </Box>
  );
};
