<template lang="pug">
  .about__card
    about__cat (:category="category")
    .card__skills-list
      about__skill(v-for="(skill, index) in skills" :skill="skill" :key="index")
    .card__add-skill
      form(@submit.prevent="addSkill")
        label.input-wrapper
          .form__error(v-if="titleError") {{ titleError }}
          input(type=text v-model="newSkill.title" placeholder="Новый навык")
        label.input-wrapper.skills-percent
          .form__error(v-if="percentError") {{ percentError }}
          input(type="number" max="100" v-model="newSkill.percent")
          span.skills-percent-icon %
        button.button-add +
</template>

<script>
// import aboutCat from '@/components/elements/about-cat'
// import aboutSkill from '@/components/elements/about-cat'
import { Validator } from 'simple-vue-validator'
import @axios from '@/requests';
export default {
  data() {
    return {
      formData: {
        name: '',
        password: '',
      }
    }
  },
  components: {
    formInput
  },
  validators: {
    
  },
  methods: {
    
      }
    }
  }
}
</script>

<style lang="postcss">

</style>

