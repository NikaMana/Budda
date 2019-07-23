<template lang="pug">
  section.works
    .section-header
      h1 Блок "Работы"
      .section-container
        work-edit(v-if="isEdit" :is-new="!selectedWork" :work="selectedWork" @cancel-edit="cancelEdit")
          .item-cards
            work-card(@edit="editWork")
            work-card(v-for="(work, index) in works" :work="work" :key="index" @edit="editWork")
</template>

<script>
// import workCard from "@/components/elements/work-card"
// import workCard from "@/components/elements/work-card"

export default {
  components: {
    workCard,
    workEdit
  },
  data() {
    return {
      isEdit: false,
      selectedWork: '',
    }
  },
  computed: {
    works() {
      return this.$store.getters.works;
    }
  },
}
</script>

<style lang="postcss">
  // @import "../styles/blocks/admin.pcss"
</style>

