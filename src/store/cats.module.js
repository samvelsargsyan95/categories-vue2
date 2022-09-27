import RequestService from "@/services/request.service";

export const catsModule = {
    namespaced: true,
    state: {
        categories: [],
        imagesList: [],
        limit: 10,
        selectedCategoryId: null
    },

    actions: {
        async getImages({ state, commit }, data) {
            let page = null

            if (!data.loadMoreImages) {
                page = 1
            }

            if (data.loadMoreImages) {
                commit('setData', { limit: state.limit += 10 })
                page = null

            }

            const options = {
                limit: state.limit,
            }

            if (page) {
                options.page = page
            }

            if (state.selectedCategoryId !== null) {
                options.category_ids = state.selectedCategoryId
            }

            let query = Object.keys(options)
                .map((key) => key + "=" + options[key])
                .join("&");

            await RequestService.read(`/images/search?${query}`).then(r => {
                let imagesList = []

                if (data.loadMoreImages) {
                    imagesList = [...state.imagesList, ...r.data]
                } else {
                    imagesList = r.data
                }

                commit('setData', { imagesList })
            })
        },

        async getCategories({ commit }) {
            await RequestService.read('/categories').then(r => {
                commit("setData", { categories: r.data })
            })
        }
    },

    mutations: {
        setData(state, data) {
            for (const key in data) {
                state[key] = data[key]
            }
        },
    },

    getters: {
        categories: (state) => state.categories,
        imagesList: (state) => state.imagesList
    }
};
