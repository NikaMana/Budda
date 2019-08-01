import $axios from "@/requests";
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SAVE_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    ADD_CATEGORY: (state, categories) => {
      state.categories.push(categories)
    },
  },
  actions: {
    fetchCategories: async ({ commit }) => {
      const { data } = await $axios.get("/categories/145")
      commit("SAVE_CATEGORIES", data)  
    },
    createCategory: async ({ commit }, newCategory) => {
      const { data } = await $axios.post("/categories", { title: newCategory })
      commit("ADD_CATEGORY", data)
    },
    deleteCategory: async ({commit}, categoryId) => {
      const { data } = await $axios.delete(`/skills/${skillId}`)
      commit("DELETE_SKILL", skillId)
    }
  }
}