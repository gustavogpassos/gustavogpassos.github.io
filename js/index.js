import api from "./api.js"

$(async () => {
    $("#loading").show()
    const user = await api.searchUser("gustavogpassos")
    if (user != null) {
        const repos = await api.getUserRepos(user.login)
        renderRepos(repos)
        $("#user-name").html(user.login)
        $("#user-image").attr("src", user.avatar_url)
        $("#count-repos").html(repos.length)
        sessionStorage.setItem("user", user.login)
    }
    $("#loading").hide()
})

$("#repoDetail").on("click", async (data) => {
    $("#list-repo-header").hide()
    console.log(data)
})

$("#search-repo-btn").on("click", async () => {
    $("#loading").show()
    let search = $("#search-repo").val()
    if (search.trim() != "") {
        $("#search-repo").removeClass("is-invalid")
        const user = sessionStorage.getItem("user")
        const repos = await api.searchUserRepos(user, search)
        console.log(repos)
        renderRepos(repos.items)
    } else {
        $("#search-repo").addClass("is-invalid")
    }
    $("#loading").hide()
})

$("#clear-filter-btn").on("click", async () => {
    $("#loading").show()
    $("#search-repo").val("")
    const user = await api.searchUser("gustavogpassos")
    if (user != null) {
        const repos = await api.getUserRepos(user.login)
        renderRepos(repos)
        $("#user-name").html(user.login)
        $("#user-image").attr("src", user.avatar_url)
        $("#count-repos").html(repos.length)
        sessionStorage.setItem("user", user.login)
    }
    $("#loading").hide()
})

function renderRepos(repos) {
    $("#list-repos").html("")
    repos.map((repo) => {
        //criar link
        var cardLink = document.createElement("a")
        cardLink.href = "#!"
        cardLink.addEventListener("click", getRepoInfo)
        cardLink.id = repo.name
        cardLink.innerHTML = "Ver mais"
        cardLink.className = "card-link position-absolute"
        //titulo
        var cardTitle = document.createElement("h5")
        cardTitle.className = "card-title text-truncate"
        cardTitle.innerHTML = repo.name
        //subtitulo
        var cardSubtitle = document.createElement("h6")
        cardSubtitle.className = "card-subtitle"
        cardSubtitle.innerHTML = repo.language
        //card-body
        var cardBody = document.createElement("div")
        cardBody.className = "card-body"
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardSubtitle)
        cardBody.appendChild(cardLink)
        //card
        var card = document.createElement("div")
        card.className = "card p-2 h-100"
        card.appendChild(cardBody)
        //colunas
        var colItem = document.createElement("div")
        colItem.className = "col col-sm-4 p-1"
        colItem.setAttribute("style", "min-height:150px")
        colItem.appendChild(card)
        $("#list-repos").append(colItem)
    })
}

async function getRepoInfo(element) {
    $("#loading").show()
    const user = sessionStorage.getItem("user")
    const repo = await api.getRepoInfo(user, element.target.id)

    console.log(repo)
    //limpar os campos
    $("#repo-name").html("")
    $("#repo-langs").html("")
    $("#commit-count").html("")
    $("#last-commit").html("")

    $("#repo-name").html(repo.name)
    $("#repo-langs").html("Linguagens: " + repo.languages)
    $("#commit-count").html("Commits: " + repo.countCommits)

    const list = document.createElement("ul")
    const cAuthor = document.createElement("li")
    cAuthor.innerHTML = "Autor: " + repo.lastCommitAuthor
    const cDate = document.createElement("li")
    cDate.innerHTML = "Data: " + repo.lastCommitDate
    const cMessage = document.createElement("li")
    cMessage.className = "text-truncate"
    cMessage.innerHTML = "Mensagem: " + repo.lastCommitMsg

    list.appendChild(cAuthor)
    list.appendChild(cDate)
    list.appendChild(cMessage)

    const strong = document.createElement("strong")
    strong.innerHTML = "Último commit"
    $("#last-commit").append(strong)
    $("#last-commit").append(list)

    $("#list-repos-main").hide()
    $("#detail-repo-main").show()

    $("#loading").hide()
}

$("#back-list").on("click", () => {
    $("#list-repos-main").show()
    $("#detail-repo-main").hide()
})
