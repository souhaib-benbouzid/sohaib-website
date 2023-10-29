import { Project } from "src/types";
import golang from "./assets/golang.jpg";

export const projects: Project[] = [
  {
    title: "The Golang Journey",
    description:
      "A project documentation of my learning journey of Go language. the project includes application examples written in go. TypeScript, and React",
    image: golang as any,
    techStack: ["Go", "TypeScript", "React"],
    urls: {
      code: "https://github.com/souhaib-benbouzid/golang",
      project: "https://github.com/souhaib-benbouzid/golang",
    },
  },
];
