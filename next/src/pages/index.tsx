import Head from "next/head";
import { Hidden } from "@mui/material";
import { MobileNavigation } from "src/components";
import type { NextPage } from "next";
import { PromiseResult } from "src/types";
import { mobileNavigationData } from "src/data/mobile-menu";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "landing",
      "navigation",
    ])),
  },
});

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const Landing: NextPage<Props> = () => {
  const { t } = useTranslation("landing");

  return (
    <div>
      <Head>
        <title>{t("landing:title")}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>{t("landing:description")}</main>
      <Hidden mdUp>
        <MobileNavigation {...mobileNavigationData} />
      </Hidden>
    </div>
  );
};

export default Landing;
