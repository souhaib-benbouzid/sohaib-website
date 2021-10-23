import { AboutMeProps } from "src/components/about-me";
import Git from "src/assets/svg/git.svg";
import { LandingHeaderProps } from "src/components/landing-header";
import LandingImage from "src/assets/jpg/pic.jpg";
import NodeJS from "src/assets/svg/nodejs.svg";
import React from "src/assets/svg/react.svg";
import Redux from "src/assets/svg/redux.svg";
import Typescript from "src/assets/svg/typescript.svg";
import Webpack from "src/assets/svg/webpack.svg";

const landingHeader: LandingHeaderProps = {
  primaryButton: {
    text: "headerData.primaryButton.text",
    href: "mailto:sohaib.code@gmail.com",
  },
  secondaryButton: {
    text: "headerData.secondaryButton.text",
    href: "mailto:sohaib.code@gmail.com",
  },
  LandingImage: {
    href: LandingImage,
  },
  name: "headerData.name",
  jobTitle: "headerData.jobTitle",
};

const pageData = {
  title: "pageData.title",
};

const aboutMe: AboutMeProps = {
  headerTitle: "aboutMe.headerTitle",
  bio: "aboutMe.bio",
  experience: {
    title: "aboutMe.experience.title",
    endLine: "aboutMe.experience.endLine",
    experiences: [
      {
        time: "aboutMe.experience.time1",
        descriptions: [
          "aboutMe.experience.description1",
          "aboutMe.experience.description2",
          "aboutMe.experience.description3",
        ],
        jobTitle: "aboutMe.experience.jobTitle1",
        secondTitle: "aboutMe.experience.secondTitle2",
      },
      {
        time: "aboutMe.experience.time1",
        descriptions: [
          "aboutMe.experience.description1",
          "aboutMe.experience.description2",
          "aboutMe.experience.description3",
        ],
        jobTitle: "aboutMe.experience.jobTitle1",
        secondTitle: "aboutMe.experience.secondTitle2",
      },
      {
        time: "aboutMe.experience.time1",
        descriptions: [
          "aboutMe.experience.description1",
          "aboutMe.experience.description2",
          "aboutMe.experience.description3",
        ],
        jobTitle: "aboutMe.experience.jobTitle1",
        secondTitle: "aboutMe.experience.secondTitle2",
      },
      {
        time: "aboutMe.experience.time1",
        descriptions: [
          "aboutMe.experience.description1",
          "aboutMe.experience.description2",
          "aboutMe.experience.description3",
        ],
        jobTitle: "aboutMe.experience.jobTitle1",
        secondTitle: "aboutMe.experience.secondTitle2",
      },
    ],
  },
  mainStack: {
    technologies: [
      {
        logo: Git,
        alt: "Git",
      },
      {
        logo: NodeJS,
        alt: "NodeJS",
      },
      {
        logo: React,
        alt: "React",
      },
      {
        logo: Redux,
        alt: "Redux",
      },
      {
        logo: Typescript,
        alt: "Typescript",
      },
      {
        logo: Webpack,
        alt: "Webpack",
      },
    ],
    title: "aboutMe.mainStack.title",
  },
};

export const landingData = {
  pageData,
  landingHeader,
  aboutMe,
};
