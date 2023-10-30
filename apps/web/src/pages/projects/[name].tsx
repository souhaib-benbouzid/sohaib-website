import { Container, Grid } from "@mui/material";
import { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { PageHeader } from "src/components";
import FullPage from "src/components/layout/FullPage";
import MarkdownCanvas from "src/components/mardkown/MarkdownCanvas";
import { apiService } from "src/services/api";
import { PromiseResult } from "src/types";

export const getStaticPaths = async () => {
  const repos = await apiService.fetchProjects();
  const paths = repos.map((repo: { name: string }) => ({
    params: {
      name: repo.name,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ locale, params }: any) {
  const name = params.name;
  const content = await apiService.fetchProjectReadme(name);

  return {
    props: {
      name,
      content,
      ...(await serverSideTranslations(locale, [
        "common",
        "development",
        "navbar",
        "footer",
      ])),
    },
  };
}

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const ProjectPage: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{props.name}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FullPage>
        <Container maxWidth="lg">
          <PageHeader title={props.name} />
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
            <MarkdownCanvas markdown={props.content} />
          </Grid>
        </Container>
      </FullPage>
    </>
  );
};

export default ProjectPage;
