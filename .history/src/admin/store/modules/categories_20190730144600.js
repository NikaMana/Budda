import $axios from "@/requests";
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SAVE_CATEGORIES: (state, categories) => {
      state.categories = data;
    }
  },
  actions: {
    fetchCategories: async ({ commit }) => {
      const { data } = await $axios.get("/categories/")
      commit("SAVE_CATEGORIES", data)  
    }
  }
}