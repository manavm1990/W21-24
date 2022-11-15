/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */

import apiService from "./services/api.service";
import renderService from "./services/render.service";

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = event.target.username.value;

  const data = await apiService.getReposByUsername(username);

  renderService.renderRepos(username, data);
});

document.getElementById("topics").addEventListener("click", async (event) => {
  // With EVENT BUBBLING, we can listen to the parent element and get the target element
  // from the event object.
  // Let's make sure we only listen to the buttons.
  if (event.target.tagName === "BUTTON") {
    const topic = event.target.innerText.toLowerCase();

    // GitHub API will send an 'items' array with the repos.
    const data = await apiService.getReposByTopic(topic);

    renderService.renderRepos(topic, data.items);
  }
});
