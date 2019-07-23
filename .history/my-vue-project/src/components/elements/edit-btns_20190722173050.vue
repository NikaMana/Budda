<template lang="pug">
  .edit-btns
    .edit-btns__ok(v-if="isEditMode" @click="$emit('trigger-btn', 'ok')")
      svg-icon(:icon-name="'tick'" :class-name="'edit-btns-icon'")
    .edit-btns__cancel(v-if="isEditMode" @click="$emit('trigger-btn', 'cancel')")
      svg-icon(:icon-name="'cross'" :class-name="'edit-btns-icon'")
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