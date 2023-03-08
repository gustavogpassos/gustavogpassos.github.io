import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

const app = new Octokit()

const api = {
    searchUser: async (username) => {
        const response = await app.request(`GET /users/${username}`)
        return response.data
    },
    getUserRepos: async (user) => {
        const response = await app.request(`GET /users/${user}/repos`)
        return response.data
    },
    searchUserRepos: async (user, search) => {
        const queryString =
            "q=" + encodeURIComponent(`${search} in:name user:${user}`)
        const response = await app.request(
            `GET /search/repositories?${queryString}`
        )
        return response.data
    },
    getRepoInfo: async (user, repo) => {
        const commits = await app.request(`GET /repos/${user}/${repo}/commits`)
        const lastCommitMsg = commits.data[0].commit.message
        const lastCommitAuthor = commits.data[0].commit.author.name
        const lastCommitDate = new Date(
            commits.data[0].commit.author.date
        ).toLocaleString("pt-BR")
        const languages = await app.request(
            `GET /repos/${user}/${repo}/languages`
        )

        return {
            name: repo,
            countCommits: commits.data.length,
            lastCommitMsg,
            lastCommitAuthor,
            lastCommitDate,
            languages: Object.keys(languages.data).join(", "),
        }
    },
}

export default api
