import $axios from "@/requests";
export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SAVE_SKILLS: (state, data) => {
      state.skills = data
    },
  },
  actions: {
    fetchSkills: async ({ commit }) => {
      const { data } = await $axios.get("/skills/145")
      this.skills = data
    }
  }
}




