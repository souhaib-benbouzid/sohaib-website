import { Box, Container } from "@mui/material";
import Markdown from "markdown-to-jsx";
import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-go";
import "prismjs/components/prism-go-module";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

import { useEffect } from "react";
import CodeBlock from "./CodeBlock";
import Title from "./Title";

type Props = {
  markdown: string;
};

const MarkdownCanvas = (props: Props) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <Container
      maxWidth="lg"
      component={"article"}
      sx={{
        bgcolor: "background.paper",
        margin: "auto",
        boxShadow: 4,
        my: 4,
      }}
    >
      <Box px={8} py={2} my={4}>
        <Markdown
          options={{
            overrides: {
              h1: (props) => {
                return <Title {...props} />;
              },
              code: CodeBlock,
            },
          }}
        >
          {props.markdown}
        </Markdown>
      </Box>
    </Container>
  );
};

export default MarkdownCanvas;
