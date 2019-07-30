import $axios from "@/requests";
export default {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    
  },
  actions: {
    fetchSkills: async ({ commit }) => {
      const { data } = await $axios.get("/skills/145")
      this.skills = data
    }
  }
}




