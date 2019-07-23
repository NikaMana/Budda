export default {
  state: {
    skills: [
      { id: 1, title: "Git", percent: 100, category: 1},
      { id: 2, title: "Terminal", percent: 50, category: 1},
      { id: 3, title: "Webpack", percent: 70, category: 1},

      { id: 4, title: "CSS3", percent: 100, category: 2},
      { id: 5, title: "Javascript", percent: 50, category: 2},
      { id: 6, title: "HTML5", percent: 70, category: 2},

      { id: 7, title: "Git", percent: 100, category: 3},
      { id: 8, title: "Terminal", percent: 50, category: 3},
      { id: 9, title: "Webpack", percent: 70, category: 3},
    ]
  },
  mutations: {
    UPDATE_SKILL: (state,editedSkill) => {
      let itemIndex = state.skills.findIndex(el => el.id === editedSkill.id)
      if (itemIndex !== -1) {
        state.skills.splice(itemIndex, 1, editedSkill)
      }
    },
    ADD_SKILL: (state, skill) => {
      state.skills.push(skill)
    },
    DELETE_SKILL: (state, skillId) => {
      console.log(skillId)
      let itemIndex = state.skills.findIndex(el => el.id === skillId)
    }
  }
}