<template lang="pug">
  .edit-btns
    .edit-btns__ok(v-if="isEditMode" @click="$emit('trigger-btn', 'ok')")
      svg-icon(:icon-name="'tick'" :class-name="'edit-btns-icon'")
    .edit-btns__cancel(v-if="isEditMode" @click="$emit('trigger-btn', 'cancel')")
      svg-icon(:icon-name="'cross'" :class-name="'edit-btns-icon'")
    .edit-btns__edit(v-if="!isEditMode" @click="$emit('trigger-btn', 'edit')")
      svg-icon(:icon-name="'pencil'" :class-name="'edit-btns-icon'")
    .edit-btns__delete(v-if="!isEditMode" @click="$emit('trigger-btn', 'del')")
      svg-icon(v-show="isTrash" :icon-name="'trash'" :class-name="'edit-btns-icon'")
</template>

<script>
// import svgIcon from '@/components/elements/svg-icon'

export default {
  props: {
    isEditMode:{
      type: Boolean,
      default: false,
    },
    isTrash: {
      type: Boolean,
      default: true,
    }
  },
  components: {
    svgIcon,
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