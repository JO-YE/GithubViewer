import { fetchUser } from "./User.js";
import { fetchRepositories } from "./Repo.js";
import { displayRepositories, displayUserInfo } from "./Userinfo.js";

/* this js file is for the second page(pagination) that will display the desired user information*/
document.addEventListener("DOMContentLoaded", async function () {
  var urlParams = new URLSearchParams(window.location.search);
  var username = urlParams.get("username");
  const user = await fetchUser(username);
  const repositories = await fetchRepositories(username);

  displayUserInfo(user);
  displayRepositories(repositories);
});
