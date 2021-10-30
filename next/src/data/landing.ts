import { AboutMeProps } from "src/components/about-me";
import Git from "src/components/logos/git";
import { LandingHeaderProps } from "src/components/landing-header";
import LandingImage from "src/assets/jpg/pic.jpg";
import NodeJS from "src/components/logos/nodejs";
import React from "src/components/logos/react";
import Redux from "src/components/logos/redux";
import Typescript from "src/components/logos/typescript";
import Webpack from "src/components/logos/webpack";
import github from "src/components/logos/github";
import sass from "src/components/logos/sass";

const landingHeader: LandingHeaderProps = {
  primaryButton: {
    text: "headerData.primaryButton.text",
    href: "mailto:sohaib.code@gmail.com",
  },
  secondaryButton: {
    text: "headerData.secondaryButton.text",
    href: "https://drive.google.com/file/d/1ghcwbvtZWw1lCj-loUtuEHz3rZ-mnkgq/view?usp=sharing",
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
        Logo: React,
        alt: "React",
      },
      {
        Logo: Redux,
        alt: "Redux",
      },
      {
        Logo: sass,
        alt: "sass",
      },
      {
        Logo: Typescript,
        alt: "Typescript",
      },
      {
        Logo: Webpack,
        alt: "Webpack",
      },
      {
        Logo: NodeJS,
        alt: "NodeJS",
      },

      {
        Logo: Git,
        alt: "Git",
      },

      {
        Logo: github,
        alt: "NodeJS",
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
