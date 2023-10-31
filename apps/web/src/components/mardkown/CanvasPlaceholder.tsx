import { Box, Container } from "@mui/material";

type Props = {};

const CanvasPlaceholder = (props: Props) => {
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
      <Box px={8} py={2} my={4}></Box>
    </Container>
  );
};

export default CanvasPlaceholder;
