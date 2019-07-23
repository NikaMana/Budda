<template lang="pug">
  .edit-btns
    
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
    
  }
}
</script>

<style lang="postcss">
  
</style>