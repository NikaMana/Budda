import $axios from "@/requests";
import axios from "../../requests";
export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    }
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        // const response = await axios.get(`${baseUrl}/categories/`)
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error 
        )
      }
    }
  },
}