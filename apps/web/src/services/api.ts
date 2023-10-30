class ApiService {
  baseurl = process.env.NEXT_PUBLIC_API_URL;
  githubApi = process.env.NEXT_PUBLIC_GITHUB_API;
  githubApiToken = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;
  USER_NAME = process.env.NEXT_PUBLIC_USER_NAME;

  fetchProjects = async () => {
    try {
      const response = await fetch(
        `${this.githubApi}/users/${this.USER_NAME}/repos`,
      );
      const body = await response.json();
      return body;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  fetchProjectContent = async (name: string) => {
    try {
      const response = await fetch(
        `${this.githubApi}/repos/${this.USER_NAME}/${name}/contents/`,
        {
          headers: { "Content-Type": "application/json" },
        },
      );
      const body = await response.json();
      return body;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  fetchProjectReadme = async (name: string) => {
    try {
      const content = await this.fetchProjectContent(name);
      if (content.length === 0) {
        return "No Readme found";
      }

      const readMeFile = content.find(
        (item: { name: string }) => item?.name.toLowerCase() === "readme.md",
      );

      if (!readMeFile.download_url) {
        return "No Readme found";
      }
      const response = await fetch(readMeFile.html_url + "?raw=true");
      const markdown = await response.text();
      return markdown;
    } catch (error) {
      console.log(error);
      return "No Read me Found";
    }
  };
}

export const apiService = new ApiService();
