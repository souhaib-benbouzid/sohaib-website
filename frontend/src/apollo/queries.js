import { gql } from '@apollo/client';

export const getAboutDataQuery = gql`
  query getData {
    about {
      title
      bio
      goal
      experience {
        period
        title
        description
      }

      achievements {
        period
        title
        description
      }
      certifications {
        period
        title
        description
      }
    }
  }
`;

export const getContactDataQuery = gql`
  query getData {
    contact {
      title
      description
      contactInfo {
        phone
        email
        street
        city
        postalCode
        country
      }
    }
  }
`;

export const getHomeDataQuery = gql`
  query getData {
    home {
      resume {
        title
        href
      }
      job
      buttonPrimary {
        title
        href
      }
      buttonSecondary {
        href
        title
      }
    }
  }
`;

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
