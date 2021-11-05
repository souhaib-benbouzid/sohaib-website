import { Dzcode, DzcodeProps } from "./dzcode-section";
import { Emploitic, EmploiticProps } from "./emploitic";
import { ExperienceSection, ExperienceSectionProps } from "./experience";
import { MainStack, MainStackProps } from "./mainstack";
import { WhoIsSouhaib, WhoIsSouhaibProps } from "./who-is-souhaib";

import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { FC } from "react";
import { PageHeader } from "src/components";
import { useTranslation } from "react-i18next";

export interface AboutMeProps {
  headerTitle: string;
  whoissouhaib: WhoIsSouhaibProps;
  emploitic: EmploiticProps;
  dzcode: DzcodeProps;
  mainStack: MainStackProps;
  experience: ExperienceSectionProps;
}

const StyledDivider = () => (
  <Box
    sx={{
      width: "20%",
      bgcolor: "primary.main",
      height: "2px",
      m: "auto",
      mb: 7,
      mt: 7,
      borderRadius: "100px",
    }}
  />
);

const AboutMe: FC<AboutMeProps> = ({
  headerTitle,
  experience,
  mainStack,
  emploitic,
  dzcode,
  whoissouhaib,
}) => {
  const { t } = useTranslation("landing");

  return (
    <Container maxWidth="lg">
      <PageHeader title={t(headerTitle)} />
      <WhoIsSouhaib {...whoissouhaib} />
      <StyledDivider />
      <Emploitic {...emploitic} />
      <StyledDivider />
      <Dzcode {...dzcode} />
      <StyledDivider />
      <MainStack {...mainStack} />
      <StyledDivider />
      <ExperienceSection {...experience} />
    </Container>
  );
};

export default AboutMe;
