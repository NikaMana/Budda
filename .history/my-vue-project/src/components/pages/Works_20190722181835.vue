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
// export default {
//   components: {
    
//   }
// }
</script>

<style lang="postcss">
  // @import "../styles/blocks/admin.pcss"
</style>

