import $axios from "@/requests";
export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SAVE_SKILLS: (state, data) => {
      state.skills = data
    }
  },
  actions: {
    fetchSkills: async ({ commit }) => {
      const { data } = await $axios.get("/skills/145")
      commit("SAVE_SKILLS", data)
    },
    createSkill() {
      $axios.post("/skills", { title: this.newskill, percent: 55,  category: 948 })
    }
  }
}




