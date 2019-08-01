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
    DELETE_CATEGORY: (state, categories) => {
      let itemIndex = state.categories.findIndex(el => el.id === categories)
      if (itemIndex !== -1) {
        state.categories.splice(itemIndex, 1)
      }
    },
    UPDATE_CATEGORY: (state, data) => {
      let itemIndex = state.categories.findIndex(el => el.id === data.id)
      if (itemIndex !== -1) {
        state.categories.splice(itemIndex, 1, data)
      }
    }
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
      const { data } = await $axios.delete(`/categories/${categoryId}`)
      commit("DELETE_CATEGORY", categoryId)
    },
    updateCategory: async ({commit}, data) => {
      let categoryId = data.id
      const { data } = await $axios.post(`/categories/${categoryId}`, data)
      commit("UPDATE_CATEGORY", categoryId)
    }
  }
}