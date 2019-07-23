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
    value: String / Number,
  },
  data() {
    return {
      
    }
  },
  computed: {
    inputClass() {
      return this.icon ? ` form__input-icon icon--${this.icon} ` : ''
    }
  },
  methods: {
    
  }
}

</script>

<style lang="postcss">
  .form__label {
    opacity: 0.6;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .form__element{
    position: relative;
    margin-bottom: 40px;
    width: 100%;
    display: inline-block;

    input {
      font-size: 18px;
      font-weight: 700;
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 2px solid $dark-color;
      padding: 10px 0 20px 0;
      transition: 0.5s all;

      &:hover, &:focus {
        border-bottom: 2px;
      }

      &.form__input-icon {
        padding-left: 45px;
        background-repeat: no-repeat;
        background-position: 0 5px;
      }

      &.icon--user {
        background-image: svg-load('user.svg', fill=$icon-color, width=26px, height=auto);

        &:hover, &:focus {
          background-image: svg-load('user.svg', fill=$main-color, width=26px, height=auto);
        }
      }

      &.icon--key {
        background-image: svg-load('key.svg', fill=$icon-color, width=26px, height=auto);

        &:hover, &:focus {
          background-image: svg-load('key.svg', fill=$main-color, width=26px, height=auto);
        }
      }
    }

    textarea{
      width: 100%;
      height: 146px;
      border: none;
      outline: 1px solid $icon-color;
      padding: 20px;
    }
  }
</style>