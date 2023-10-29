import { Container, Grid } from "@mui/material";
import { NavBar, PageHeader } from "src/components";

import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import PagesBackground from "src/components/PagesBackground";
import { ProjectCard } from "src/components/project-card";
import { developmentData } from "src/data/development";
import { navbar } from "src/data/navbar";
import { Project, PromiseResult } from "src/types";
import { projects } from "../data/projects";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "development",
      "navbar",
      "footer",
    ])),
  },
});

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const Projects: NextPage<Props> = () => {
  const { t } = useTranslation("development");
  const data: Project[] = projects;

  return (
    <div>
      <Head>
        <title>{t(developmentData.pageData.title)}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <PagesBackground>
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
              {data.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <ProjectCard {...project} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </PagesBackground>
      </main>
    </div>
  );
};

export default Projects;
