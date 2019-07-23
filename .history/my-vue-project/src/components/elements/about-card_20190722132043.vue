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
// import aboutSkill from '@/components/elements/about-skill'
import { Validator } from 'simple-vue-validator'

export default {
  props: {
    category: Object,
  },
  data() {
    return {
      title: '',
      newSkill: {
        title: '',
        percent: '',
      },
    }
  },
  computed: {
    skills() {
      if(!this.category) {
        return []
      }
      return this.$store.getters.skillsByCategory(this.category.id)
    },
    titleError() {
      return this.validation.firstError('newSkill.title')
    },
    percentError() {
      return this.validation.firstError('newSkill.percent')
    }
  },
  validators: {
    'newSkill.title': function (value) {
      return Validator.value(value).required();
    },
    'newSkill.percent': function (value) {
      return Validator.value(value).required();
    }
  },
  methods: {
    async addSkill() {
      const success = await this.$validate()
      console.log("res", success)
      if (success) {
        this.newSkill.category = this.category.id
        this.$store.dispatch('addSkill', this.newSkill)
      }
    }
  },
  components: {
    aboutCat,
    aboutSkill
  }
</script>

<style lang="postcss">

</style>

