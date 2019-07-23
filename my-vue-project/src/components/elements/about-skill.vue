<template lang="pug">
  .card__skills-item(:class="inputClass")
    label.input-wrapper.skills-name
      input(type="text" v-model="editedSkill.title")
    label.input-wrapper.skills-percent
      input(type="number" max="100" v-model="editedSkill.percent")
      span.skills-percent-icon %
    edit-btns(@trigger-btn="prcessClick" :is-edit-mode="this.isEditMode")
</template>

<script>
// import editBtns from '@/components/elements/edit-btns'

export default {
  props: {
    skill: Object,
  },
  components: {
    editBtns,
  },
  watch: {
    skill() {
      this.editedSkill = {...this.skill}
    }
  },
  data() {
    return {
      editedSkill: {...this.skill},
      isEditMode: false,
    }
  },
  computed: {
    inputClass() {
      return {
        'card__skill-item--disabled': !this.isEditMode
      }
    }
  },
  methods: {
    processClick(mod) {
      if (mod === "edit") {
        this.isEditMode = true;
      } else if (mod === "ok") {
        this.isEditMode = false;
        this.$store.dispatch('updateSkill', this.editedSkill)
      } else if (mod === "del") {
        this.$store.dispatch('deleteSkill', this.editedSkill.id)
      } else if (mod === "cancel") {
        this.isEditMode = false;
        this.editedSkill.title = this.skill.title
        this.editedSkill.percent = this.skill.percent
      }
    }
  }
}
</script>

<style lang="postcss">
  .card__skills-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &--disabled {
      input, label {
        pointer-events: none;
      }
    }
  }
  .skills-name {
    width: 50%;
  }
  .skills-percent {
    width: 50%;
  }
</style>
