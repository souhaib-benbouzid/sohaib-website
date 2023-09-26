import {
  default as LandingImage,
  default as myPhoto,
} from "src/assets/jpg/pic.png";
import emploiticLogo from "src/assets/png/emploitic.logo.png";
import { AboutMeProps } from "src/components/about-me";
import { LandingHeaderProps } from "src/components/landing-header";
import Git from "src/components/logos/git";
import github from "src/components/logos/github";
import NodeJS from "src/components/logos/nodejs";
import React from "src/components/logos/react";
import Redux from "src/components/logos/redux";
import sass from "src/components/logos/sass";
import Typescript from "src/components/logos/typescript";
import Webpack from "src/components/logos/webpack";

const landingHeader: LandingHeaderProps = {
  primaryButton: {
    text: "headerData.primaryButton.text",
    href: "mailto:sohaib.code@gmail.com",
  },
  secondaryButton: {
    text: "headerData.secondaryButton.text",
    href: "#experience",
  },
  LandingImage: {
    href: LandingImage,
  },

  welcomeText: "headerData.welcomeText",
  mainText: "headerData.mainText",
  specialText: "headerData.specialText",
  mainText2: "headerData.mainText2",
  jobTitle: "headerData.jobTitle",
  secondaryTitle: "headerData.secondaryTitle",
  scrollText: "headerData.scrollText",
};

const pageData = {
  title: "pageData.title",
};

const aboutMe: AboutMeProps = {
  headerTitle: "aboutMe.headerTitle",
  whoissouhaib: {
    title: "aboutMe.whoIsSouhaib.title",
    description: "aboutMe.whoIsSouhaib.bio",
    image: {
      src: myPhoto.src,
      alt: "souhaib benbouzid photo",
    },
  },
  emploitic: {
    jobTitle: "aboutMe.emploitic.jobTitle",
    company: "aboutMe.emploitic.company",
    description: "aboutMe.emploitic.description",
    videoUrl: "https://www.youtube.com/watch?v=SiS-avtDBkk&t=66s",
    image: {
      src: emploiticLogo.src,
      alt: "emploitic",
    },
  },
  dzcode: {
    jobTitle: "aboutMe.dzcode.jobTitle",
    company: "aboutMe.dzcode.company",
    description: "aboutMe.dzcode.description",
    videoUrl: "https://www.youtube.com/watch?v=6yQcHrcDXZ8&t=55s",
  },
  mainStack: {
    title: "aboutMe.mainStack.title",
    technologies: [
      { Logo: React, alt: "React" },
      { Logo: Redux, alt: "Redux" },
      { Logo: sass, alt: "sass" },
      { Logo: Typescript, alt: "Typescript" },
      { Logo: Webpack, alt: "Webpack" },
      { Logo: NodeJS, alt: "NodeJS" },
      { Logo: Git, alt: "Git" },
      { Logo: github, alt: "NodeJS" },
    ],
  },
  experience: {
    title: "aboutMe.experience.title",
    endLine: "aboutMe.experience.endLine",
    experiences: [
      {
        jobTitle: "aboutMe.experience.fourth.jobTitle",
        secondTitle: "aboutMe.experience.fourth.secondTitle",
        time: "aboutMe.experience.fourth.time",
        descriptions: [
          "aboutMe.experience.fourth.description1",
          "aboutMe.experience.fourth.description2",
          "aboutMe.experience.fourth.description3",
          "aboutMe.experience.fourth.description4",
          "aboutMe.experience.fourth.description6",
        ],
      },

      {
        jobTitle: "aboutMe.experience.first.jobTitle",
        secondTitle: "aboutMe.experience.first.secondTitle",
        time: "aboutMe.experience.first.time",
        descriptions: [
          "aboutMe.experience.first.description1",
          "aboutMe.experience.first.description2",
          "aboutMe.experience.first.description3",
        ],
      },
      // {
      //   jobTitle: "aboutMe.experience.second.jobTitle",
      //   secondTitle: "aboutMe.experience.second.secondTitle",
      //   time: "aboutMe.experience.second.time",
      //   descriptions: [
      //     "aboutMe.experience.second.description1",
      //     "aboutMe.experience.second.description2",
      //     "aboutMe.experience.second.description3",
      //     "aboutMe.experience.second.description4",
      //   ],
      // },
      {
        jobTitle: "aboutMe.experience.third.jobTitle",
        secondTitle: "aboutMe.experience.third.secondTitle",
        time: "aboutMe.experience.third.time",
        descriptions: ["aboutMe.experience.third.description1"],
      },
    ],
  },
};

export const landingData = {
  pageData,
  landingHeader,
  aboutMe,
};
