import { gql } from '@apollo/client';

export const getProjectsQuery = gql`
  query getProjects {
    projects {
      id
      image {
        url
        alternativeText
      }
      title
      description
      preview_link
      code_link
      tags {
        name
      }
    }
  }
`;

export const getArticles = gql`
  query getArticles {
    articles {
      id
      image {
        url
        alternativeText
      }
      title
      title_seo
      description
      tags {
        name
      }
    }
  }
`;

export const getArticle = gql`
  query getArticle($title: String!) {
    articles(where: { title_seo: $title }) {
      id
      title
      content
      image {
        url
        alternativeText
      }
      tags {
        name
      }
      sidebar {
        sections
      }
    }
  }
`;
