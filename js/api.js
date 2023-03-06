import { Octokit } from "https://cdn.skypack.dev/@octokit/rest"

const app = new Octokit()

const api = {
    searchUser: async (username) => {
        const response = await app.rest.users.getByUsername({ username })
        return response.data
    },
    getUserRepos: async (user) => {
        const response = await app.request(`GET /users/${user}/repos`)
        return response.data
    },
    getRepoInfo: async (user, repo) => {
        const response = await app.request(`GET /repos/${user}/${repo}`)
    },
}

export default api
