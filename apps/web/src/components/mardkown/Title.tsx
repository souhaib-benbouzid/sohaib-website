import { Typography } from "@mui/material";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Title = (props: Props) => {
  return (
    <Typography
      variant="h1"
      textAlign="center"
      fontWeight="bold"
      lineHeight={2}
      mb={6}
      {...props}
    >
      {props.children}
    </Typography>
  );
};

export default Title;
