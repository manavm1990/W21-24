const BASE_URL = "http://api.github.com";

export const apiService = {
  async getUserRepos(username) {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    return response.json();
  },

  async getReposIssues(repo) {
    const response = await fetch(`${BASE_URL}/repos/${repo}/issues`);
    return response.json();
  },
};
