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
        
      }
    }
  },
  components: {
    
  }
}
</script>

<style lang="postcss">

</style>
