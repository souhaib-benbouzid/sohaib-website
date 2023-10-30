import { Container, Grid } from "@mui/material";
import { PageHeader } from "src/components";

import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import FullPage from "src/components/layout/FullPage";
import { ProjectCard } from "src/components/project-card";
import { developmentData } from "src/data/development";
import { apiService } from "src/services/api";
import { GithubRepository, PromiseResult } from "src/types";

export async function getServerSideProps({ locale }: any) {
  const repos = await apiService.fetchProjects();

  return {
    props: {
      repos,
      ...(await serverSideTranslations(locale, [
        "common",
        "development",
        "navbar",
        "footer",
      ])),
    },
  };
}

type Props = PromiseResult<ReturnType<typeof getServerSideProps>>["props"];

const Projects: NextPage<Props> = (props) => {
  const { t } = useTranslation("development");
  const data: GithubRepository[] = props.repos;

  return (
    <div>
      <Head>
        <title>{t(developmentData.pageData.title)}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FullPage>
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
                <ProjectCard image={""} {...project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </FullPage>
    </div>
  );
};

export default Projects;
