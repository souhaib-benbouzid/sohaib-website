import { AboutMeProps } from "src/components/about-me";
import Git from "src/components/logos/git";
import { LandingHeaderProps } from "src/components/landing-header";
import LandingImage from "src/assets/jpg/pic.jpg";
import NodeJS from "src/components/logos/nodejs";
import React from "src/components/logos/react";
import Redux from "src/components/logos/redux";
import Typescript from "src/components/logos/typescript";
import Webpack from "src/components/logos/webpack";
import emploiticLogo from "src/assets/png/emploitic.logo.png";
import github from "src/components/logos/github";
import myPhoto from "src/assets/jpg/pic.jpg";
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

  welcomeText: "welcomeText",
  mainText: "mainText",
  specialText: "specialText",
  mainText2: "mainText2",
  jobTitle: "jobTitle",
  secondaryTitle: "secondaryTitle",
  scrollText: "scrollText",
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
    ],
  },
  mainStack: {
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
    title: "aboutMe.mainStack.title",
  },
  dzcode: {
    jobTitle: "jobTitle1",
    company: "company1",
    description: "description1",
    videoUrl: "https://www.youtube.com/watch?v=6yQcHrcDXZ8&t=55s",
  },
  emploitic: {
    jobTitle: "jobTitle2",
    company: "company2",
    description: "description2",
    videoUrl: "https://www.youtube.com/watch?v=SiS-avtDBkk&t=66s",
    image: {
      src: emploiticLogo.src,
      alt: "emploitic",
    },
  },
  whoissouhaib: {
    title: "title",
    description: "description3",
    image: {
      src: myPhoto.src,
      alt: "souhaib benbouzid photo",
    },
  },
};

export const landingData = {
  pageData,
  landingHeader,
  aboutMe,
};
