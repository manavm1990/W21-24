const BASE_URL = "http://api.github.com";

export default {
  getIssuesResponse(nameOfRepo) {
    // Nothing to await, just return the Promise.
    // Whoever calls this  will await it.
    return fetch(`${BASE_URL}/repos/${nameOfRepo}/issues?direction=asc`);
  },

  async getReposByTopic(topic) {
    const response = await fetch(
      `${BASE_URL}/search/repositories?q=${topic}+is:featured&sort=help-wanted-issues`
    );

    // This Promise will need to be awaited by the caller.
    return response.json();
  },

  async getReposByUsername(username) {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);

    // This Promise will need to be awaited by the caller.
    return response.json();
  },
};
