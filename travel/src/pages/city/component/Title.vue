<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont back-icon">&#58916;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: 'Title'
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'

  .header
    position relative
    overflow hidden
    height 43px
    line-height 43px
    text-align center
    color #fff
    background $bgColor
    .back-icon
      position absolute
      top 0
      left 5px
      font-size 16px
      color #fff
</style>
