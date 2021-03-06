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
    ADD_SKILL: (state,data) => {
      state.skills.push(data)
    }
  },
  actions: {
    fetchSkills: async ({ commit }) => {
      const { data } = await $axios.get("/skills/145")
      commit("SAVE_SKILLS", data)
    },
    createSkill: async ({ commit }, newSkill) => {
      await $axios.post("/skills", { title: newSkill, percent: 55,  category: 948 })
      
      commit("ADD_SKILL", data)
    }
  }
}




