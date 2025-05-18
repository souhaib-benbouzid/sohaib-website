import { Grid } from "./Grid";
import Socials from "./Socials";

const Hero = () => {
  const data = {
    name: "souhaib",
    job: "Software Engineer",
    subtitle:
      "Punctual, Versatile and Simplicity focused. I worked on enterprise, open-source, and freelance projects from conception to deployment, and maintenance.",
    primary: {
      title: "Contact Me",
      href: "#contact",
    },
    secondary: {
      title: "View Projects",
      href: "#projects",
    },
  };

  return (
    <div className="w-full bg-[url(/img/hero-pattern.svg)]  bg-cover bg-center flex justify-center items-center min-h-[100svh]">
      <Grid className="px-3 md:px-2 max-w-sm md:max-w-none">
        <div className="col-span-4 md:col-span-6 md:col-start-2  lg:col-start-2 ">
          <h1 className="text-5xl font-black  mb-8 text-white text-opacity-75">
            Hi,
            <br /> I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {data.name}
            </span>
            ,<br /> A{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {data.job}
            </span>
          </h1>
          <p className="mb-12 max-w-prose text-lg font-medium text-white text-opacity-40">
            {data.subtitle}
          </p>
        </div>
        <footer id="contact" className="col-span-12 md:col-span-12">
          <Socials className="w-full py-6" />
        </footer>
      </Grid>
    </div>
  );
};

export default Hero;
