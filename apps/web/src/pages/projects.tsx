import { Container, Grid } from "@mui/material";
import { NavBar, PageHeader } from "src/components";

import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { navbar } from "src/data/navbar";
import { PromiseResult } from "src/types";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "projects",
      "navbar",
      "footer",
    ])),
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
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{
              xs: 0,
              lg: 3,
            }}
            alignItems="flex-start"
            justifyContent="flex-start"
          ></Grid>
        </Container>
      </main>
    </div>
  );
};

export default Projects;
