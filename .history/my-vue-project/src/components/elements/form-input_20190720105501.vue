<template lang="pug">
  label.form__element
    .form__error(v-if="errorText") {{ errorText }}
    .form__label {{ label }}
    textarea(
      v-if="inputType === 'textarea'"
      :value="value"
      :class="inputClass"
      @input="$emit('input', $event.target.value)"
    )
    input.form__input(
      v-else
      :class="inputClass"
      :type="inputType"
      :value="value"
      @input="$emit('input', $event.target.value)"
    )
</template>

<script>
import { Validator } from 'simple-vue-validator'

export default {
  props: {
    label: String,
    icon: String,
    errorText: String,
    inputType: {
      type: String,
      default: 'text'
    },
  }
}

</script>

<style>

</style>