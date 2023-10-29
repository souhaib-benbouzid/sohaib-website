export type UIMode = "dark" | "light";
export type PromiseResult<T> = T extends Promise<infer U> ? U : T;
export type Environment = "development" | "production";
export type LanguageCode = "en" | "ar";
export type STATUS = "SUCCESS" | "FAILURE" | "LOADING" | "IDLE";
export type USER = {
  accessToken?: string;
  refreshToken?: string;
  email: string;
  user: string;
  type: string;
};

export interface MainSettings {
  mode: UIMode;
  language: LanguageCode;
  status: STATUS;
  message?: {
    text: string;
    type: "success" | "error" | "info";
  };
  user?: USER;
}

export interface Project {
  techStack: string[];
  image: string;
  title: string;
  description: string;
  urls: {
    code: string;
    project: string;
  };
}
