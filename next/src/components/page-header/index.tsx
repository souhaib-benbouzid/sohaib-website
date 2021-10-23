import { Box, Typography } from "@mui/material";

export interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <Box sx={{ width: "100%", mt: 12, mb: 7 }}>
      <Typography variant="h1" sx={{ textAlign: "center", fontWeight: "bold" }}>
        {title}
      </Typography>
      <Box
        sx={{
          width: "90%",
          bgcolor: "primary.main",
          height: "4px",
          m: "20px auto 0",
          borderRadius: "100px",
        }}
      />
    </Box>
  );
};

export default PageHeader;
