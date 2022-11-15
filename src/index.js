/**
 * HINTS:
 * If it's a 'default' export, no need to use curly braces.
 */

document.querySelectorAll("button").forEach((button) => {
  button.classList.add("button");
});

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = event.target.username.value;
});
