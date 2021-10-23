import { NavBar, PageHeader } from "src/components";

import { Container } from "@mui/material";
import Head from "next/head";
import type { NextPage } from "next";
import { PromiseResult } from "src/types";
import { navbar } from "src/data/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "projects", "navbar"])),
  },
});

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const Projects: NextPage<Props> = () => {
  const { t } = useTranslation("projects");

  return (
    <div>
      <Head>
        <title>{t("projects:title")}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main>
        <NavBar {...navbar} />
        <Container maxWidth="lg">
          <PageHeader title={t("Projects")} />
        </Container>
      </main>
    </div>
  );
};

export default Projects;
