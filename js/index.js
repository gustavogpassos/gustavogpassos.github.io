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
    console.log(repos)
    repos.map((repo) => {
        //criar link
        var cardLink = document.createElement("a")
        cardLink.href = "#"
        cardLink.addEventListener("click", getRepoInfo)
        cardLink.id = repo.id
        cardLink.innerHTML = "Ver mais"
        cardLink.className = "card-link position-absolute"
        //titulo
        var cardTitle = document.createElement("h5")
        cardTitle.className = "card-title text-truncate"
        cardTitle.setAttribute("alt", repo.name)
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

function getRepoInfo(element) {
    console.log(element.target.id)
}
