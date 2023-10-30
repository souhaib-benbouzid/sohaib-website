import { AboutMe, LandingHeader, LanguageSelect, NavBar } from "src/components";

import { Box } from "@mui/system";
import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import PagesBackground from "src/components/PagesBackground";
import { landingData } from "src/data/landing";
import { PromiseResult } from "src/types";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "landing",
      "navbar",
      "footer",
    ])),
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

        <PagesBackground>
          <NavBar />
          <LandingHeader {...landingData.landingHeader} />
        </PagesBackground>

        <AboutMe {...landingData.aboutMe} />
      </main>
    </div>
  );
};

export default Landing;
