import Head from "next/head";
import { NavBar } from "src/components";
import type { NextPage } from "next";
import { PromiseResult } from "src/types";
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
        <title>{t("landing:title")}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main>
        <NavBar {...navbar} />
      </main>
    </div>
  );
};

export default Landing;
