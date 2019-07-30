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
    ADD_CATEGORIES: (state, categories) => {
      state.categories.push(categories)
    },
  },
  actions: {
    fetchCategories: async ({ commit }) => {
      const { data } = await $axios.get("/categories/145")
      commit("SAVE_CATEGORIES", data)  
    },
    createCategories: async ({ commit }, newCategories) => {
      const { data } = await $axios.post("/categories", { title: newSkill, percent: 55,  category: 948 })
      commit("ADD_SKILL", data)
    }
  }
}