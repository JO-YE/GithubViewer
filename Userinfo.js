const userInfoContainer = document.getElementById("user-info");
const repositoriesContainer = document.getElementById("repositories");
const usersContainer = document.querySelector(".github-users");

/* displaying random users with links to their profiles */
export function populateGithubUsers(users) {
  const usersHtml = users
    .map((user) => {
      return `
        <div class="user-box">
            <img src="${user.avatar_url}" alt="${user.login}">
            <h3>${user.login}</h3>
            <a href="https://github.com/${user.login}" target="_blank"> View Profile</a>
       </div>
      `;
    })
    .join("");
  usersContainer.innerHTML = usersHtml;
}

/* this fxn displays a specific user info */
export const displayUserInfo = (user) => {
  const userInfo = `
				<div class="user-info">
				  <img src="${user.avatar_url}" alt="${user.login}">
				  <!-- the alt attribute is used with the img tag as an alternative text for an image -->
				  <h3>${user.name}</h3>
          <p>${user.bio}</p>
          <p>Followers: ${user.followers}</p>
          <p>Following: ${user.following}</p>
          <a href="${user.html_url}" target="_blank"> View Profile</a>
          <a href="${user.blog}" target="_blank"> Get in touch</a>
        </div>
       `;
  userInfoContainer.innerHTML = userInfo;
};

/* to display user repositories info as well as links to each repo */
export function displayRepositories(repositories) {
  const repositoriesHTML = repositories
    .map((repo) => {
      return `
        <div class="repository">
          <h3>${repo.name}</h3>
          <p>${repo.description}</p>
          <p>Stars: ${repo.stargazers_count}</p>
          <p>Forks: ${repo.forks_count}</p>
          <a href="${repo.html_url}" target="_blank"> View Repository</a>
        </div>
      `;
    })
    .join("");

  repositoriesContainer.innerHTML = repositoriesHTML;
}
