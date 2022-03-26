import { Fab, Fade, useScrollTrigger } from "@mui/material";

import { Box } from "@mui/system";
import { FC } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollToTop: FC = ({}) => {
  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <Fade in={trigger}>
      <Box>
        <Box id="back-to-top-anchor" />
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 999 }}
        >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUp />
          </Fab>
        </Box>
      </Box>
    </Fade>
  );
};

export default ScrollToTop;
