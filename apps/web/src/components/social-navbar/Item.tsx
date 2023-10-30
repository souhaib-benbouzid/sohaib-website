import { ContentCopy, OpenInNew } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  text: string;
  href: string;
};

const CopyToClipboard = ({ text }: { text: string }) => {
  const [success, setSuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <Box
      onClick={handleCopy}
      sx={{
        bgcolor: "primary.main",
        cursor: "pointer",
        padding: "5px",
        border: "none",
        outline: "none",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        ":active": {
          bgcolor: "primary.light",
        },
      }}
    >
      <ContentCopy fontSize="small" />
    </Box>
  );
};

const OpenInNewTab = ({ href }: { href: string }) => {
  const [success, setSuccess] = useState(false);

  const handleCopy = async () => {
    try {
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
  };

  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        onClick={handleCopy}
        sx={{
          bgcolor: "primary.main",
          cursor: "pointer",
          padding: "5px",
          border: "none",
          outline: "none",
          borderRadius: "10px",
          display: "flex",
          marginLeft: "10px",
          alignItems: "center",
          color: "text.primary",
          ":active": {
            bgcolor: "primary.light",
          },
        }}
      >
        <OpenInNew fontSize="small" />
      </Box>
    </Box>
  );
};

export const Item = ({ text, href }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "fit-content",
      }}
    >
      <Typography
        component="div"
        variant="body1"
        noWrap
        style={{ padding: "10px 5px" }}
      >
        {text}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: "4px 6px",
          bgcolor: "background.default",
          border: "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <Typography
          component="div"
          variant="caption"
          noWrap
          style={{
            padding: "8px 10px",
            border: "none",
            outline: "none",
            maxWidth: "fit-content",
          }}
        >
          {href}
        </Typography>
        <CopyToClipboard text={href} />
        <OpenInNewTab href={href} />
      </Box>
    </Box>
  );
};
