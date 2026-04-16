
fetch(`https://api.github.com/users/danielalvesmoura`).then(res => res.json()).then(data => {
    document.getElementById("name").textContent = data.name || data.login;
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("repos-count").textContent = data.public_repos;
});

fetch(`https://api.github.com/users/danielalvesmoura/repos`).then(res => res.json()).then(repos => {
    const list = document.getElementById("repos");

    repos.forEach(repo => {
        const li = document.createElement("li");

        li.innerHTML = `
          <a class="repo_link" href="${repo.html_url}" target="_blank">
            ${repo.name}
          </a>
        `;

        list.appendChild(li);
    });
});