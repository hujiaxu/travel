<template>
  <div class="header-wrapper">
    <div class="header-left">
      <span class="iconfont back-icon">&#58916;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#58930;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#58954;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'header',
    props: {
      city: String
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .header-wrapper
    display: flex
    line-height: 43px
    background: $bgColor
    color: #ffffff
    .header-left
      width: 32px
      float: left
      .back-icon
        text-align: center
        font-size: 16px
        margin-left: 6px
    .header-input
      flex: 1
      height: 32px
      line-height: 32px
      margin-top: 6px
      padding-left: 10px
      margin-left: 10px
      background: #ffffff
      border-radius: 0.5px
      font-size: 14px
      color: #cccccc
    .header-right
      width: 62px
      float: right
      text-align: center
      color #fff
      .arrow-icon
        margin-left: -2px
        font-size: 12px

</style>
