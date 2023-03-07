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
        const response = await app.request(`GET /repos?${queryString}`)
        return response.data
    },
    getRepoInfo: async (user, repo) => {
        const response = await app.request(`GET /repos/${user}/${repo}`)
    },
}

export default api
