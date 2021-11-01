import {
  AboutMe,
  LandingHeader,
  LanguageSelect,
  ScrollToTop,
} from "src/components";

import { Box } from "@mui/system";
import Head from "next/head";
import NavBar from "src/components/navbar";
import type { NextPage } from "next";
import { PromiseResult } from "src/types";
import { landingData } from "src/data/landing";
import { navbar } from "src/data/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "landing", "navbar"])),
  },
});

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const Landing: NextPage<Props> = () => {
  const { t } = useTranslation("landing");

  return (
    <div>
      <Head>
        <title>{t(landingData.pageData.title)}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main>
        <Box
          sx={{
            display: { xs: "block", lg: "none" },
            position: "absolute",
            top: 0,
            right: 0,
            zIndex: 99,
          }}
        >
          <LanguageSelect text={"language"} />
        </Box>

        <Box
          sx={{
            backgroundColor: "#00000",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Cellipse fill='none' stroke-width='1' stroke-opacity='0.19' id='a' rx='600' ry='450'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(180 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%2327002B' href='%23a' transform='rotate(-60 0 0) scale(0.4)'/%3E%3Cuse stroke='%23340331' href='%23a' transform='rotate(-50 0 0) scale(0.5)'/%3E%3Cuse stroke='%23420436' href='%23a' transform='rotate(-40 0 0) scale(0.6)'/%3E%3Cuse stroke='%2351063b' href='%23a' transform='rotate(-30 0 0) scale(0.7)'/%3E%3Cuse stroke='%235f093f' href='%23a' transform='rotate(-20 0 0) scale(0.8)'/%3E%3Cuse stroke='%236e0d42' href='%23a' transform='rotate(-10 0 0) scale(0.9)'/%3E%3Cuse stroke='%237c1244' href='%23a' transform=''/%3E%3Cuse stroke='%238b1945' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23992045' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23a62945' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23b33244' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23c03c42' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23cb4740' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23d5523c' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23df5f39' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23e76b34' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23ef792f' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%23f58729' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%23fa9522' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23fda31a' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%23ffb210' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%23ffc106' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%23FFD000' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <NavBar {...navbar} />
          <LandingHeader {...landingData.landingHeader} />
        </Box>

        <AboutMe {...landingData.aboutMe} />
      </main>
    </div>
  );
};

export default Landing;
