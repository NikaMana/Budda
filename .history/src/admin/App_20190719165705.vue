<template lang="pug">
  .main-wrapper
    admin-header
    admin-menu
    .content-wrapper
      router-view
</template>

<script>
// import adminHeader from '@/components/layout/Header'
// import adminMenu from '@/components/layout/Menu'

export default {
  components: {
    adminHeader,
    adminMenu
  }
}
</script>

<style lang="postcss">
  // @import "../styles/blocks/admin"
</style>

