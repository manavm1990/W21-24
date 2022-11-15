/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */

import apiService from "./services/api.service";

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = event.target.username.value;

  const data = await apiService.getReposByUsername(username);

  console.log(data);
});
