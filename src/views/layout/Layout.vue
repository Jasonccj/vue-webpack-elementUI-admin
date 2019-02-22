<template>
  <div>
    11111
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    handleClickOutside() {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style>

</style>
