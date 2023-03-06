import api from "./api.js"

$(async () => {
    $("#loading").show()
    const search = $("#search").val()
    const user = await api.searchUser("gustavogpassos")
    if (user != null) {
        const repos = await api.getUserRepos(user.login)
        renderRepos(repos)
        $("#user-name").html(user.login)
        $("#user-image").attr("src", user.avatar_url)
        $("#count-repos").html(repos.length)
    }
    $("#loading").hide()
})

$("#repoDetail").on("click", async (data) => {
    console.log(data)
})

function renderRepos(repos) {
    var list = document.createElement("ul")
    list.className = "list-group"
    repos.map((repo) => {
        var itemLink = document.createElement("a")
        itemLink.href = "#"
        itemLink.addEventListener("click", getRepoInfo)
        itemLink.id = repo.id
        itemLink.innerHTML = repo.name
        itemLink.className = "item-link"
        var listItem = document.createElement("li")
        listItem.className = "list-group-item"
        listItem.appendChild(itemLink)
        list.appendChild(listItem)
    })
    $("#list-repos").append(list)
}

function getRepoInfo(element) {
    console.log(element.target.id)
}
