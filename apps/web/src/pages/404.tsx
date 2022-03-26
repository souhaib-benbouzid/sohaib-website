import { Box } from "@mui/system";
import Link from "next/link";
import { NavBar } from "src/components";
import { Typography } from "@mui/material";
import { navbar } from "src/data/navbar";

export default function Custom404() {
  return (
    <>
      <NavBar {...navbar} />
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          pt: "10vh",
          textDecoration: "underline",
        }}
      >
        <Typography variant="h4" component="h1">
          Ops... Nothing to see here,{" "}
          <Link href="/" passHref>
            <Box
              component="a"
              sx={{ color: "primary.main", textDecoration: "none" }}
            >
              go back to the website
            </Box>
          </Link>
        </Typography>
      </Box>
    </>
  );
}
