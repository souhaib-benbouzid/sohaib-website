import { LandingHeaderProps } from "src/components/landing-header";
import LandingImage from "src/assets/jpg/pic.jpg";

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

export const landingData = {
  pageData,
  landingHeader,
};
