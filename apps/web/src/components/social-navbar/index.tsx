import { Box } from "@mui/material";
import { Item } from "./Item";

const contactNavigation = [
  {
    href: "https://www.linkedin.com/in/souhaib-benbouzid",
    text: "LinkedIn",
  },
  {
    href: "sohaib.code@gmail.com",
    text: "Email",
  },

  {
    href: "https://www.facebook.com/souhaibbenbouzid",
    text: "Facebook",
  },
  {
    href: "https://github.com/Souhaib-Benbouzid",
    text: "Github",
  },
];

const SocialNavbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        flexWrap: "wrap",
      }}
    >
      {contactNavigation.map((item) => (
        <Box sx={{ marginRight: "1rem" }} key={item.href}>
          <Item {...item} />
        </Box>
      ))}
    </Box>
  );
};
export default SocialNavbar;
