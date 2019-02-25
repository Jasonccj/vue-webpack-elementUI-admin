<template>
  <div class="app-wrapper" >
    LayOut
    <div class="mobile">
      mobile
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// @import "src/styles/minxin.scss";
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background: pink;
  &.mobile.openSidebar{
    position: fixed;
    top: 0
  }
}

</style>
