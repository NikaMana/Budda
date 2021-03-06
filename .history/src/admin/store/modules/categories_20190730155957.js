import $axios from "@/requests";
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SAVE_CATEGORIES: (state, categories) => {
      state.categories = categories;
    }
    ADD_SKILL: (state, data) => {
      state.skills.push(data)
    },
  },
  actions: {
    fetchCategories: async ({ commit }) => {
      const { data } = await $axios.get("/categories/145")
      commit("SAVE_CATEGORIES", data)  
    }
  }
}