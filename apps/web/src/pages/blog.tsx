import { Container, Grid } from "@mui/material";
import { PageHeader } from "src/components";

import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import { ArticleCard } from "src/components/article-card";
import FullPage from "src/components/layout/FullPage";
import { PromiseResult } from "src/types";

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      "common",
      "blog",
      "navbar",
      "footer",
    ])),
  },
});

type Props = PromiseResult<ReturnType<typeof getStaticProps>>["props"];

const Blog: NextPage<Props> = () => {
  const { t } = useTranslation("blog");

  return (
    <div>
      <Head>
        <title>{t("blog:title")}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <FullPage>
        <Container maxWidth="lg">
          <PageHeader title={t("blog:articles")} />
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{
              xs: 0,
              lg: 4,
            }}
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {[...Array(8)].map((card, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <ArticleCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </FullPage>
    </div>
  );
};

export default Blog;
