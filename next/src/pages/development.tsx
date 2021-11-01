import { Container, Grid } from "@mui/material";
import { NavBar, PageHeader } from "src/components";

import Head from "next/head";
import type { NextPage } from "next";
import { ProjectCard } from "src/components/project-card";
import { PromiseResult } from "src/types";
import { developmentData } from "src/data/development";
import { navbar } from "src/data/navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "development",
      "navbar",
    ])),
  },
});

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const Development: NextPage<Props> = () => {
  const { t } = useTranslation("development");

  return (
    <div>
      <Head>
        <title>{t(developmentData.pageData.title)}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <NavBar {...navbar} />
        <Container maxWidth="lg">
          <PageHeader title={t(developmentData.pageData.title)} />
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{
              xs: 0,
              lg: 3,
            }}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {[...Array(8)].map((card, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ProjectCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Development;
