<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recomList" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="info-title">{{item.title}}</p>
          <p class="info-desc">{{item.desc}}</p>
          <button class="info-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    props: {
      recomList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    margin-top 10px
    line-height 40px
    background #eeeeee
    text-indent 10px
  .item
    overflow hidden
    display flex
    height 94px
    .item-img
      width 84px
      height 84px
      padding 5px
    .item-info
      flex 1
      padding 0 5px
      .info-title
        line-height 27px
        font-size 16px
      .info-desc
        font-size 12px
        line-height 20px
        color #cccccc
      .info-button
        background #ff9300
        padding 0 5px
        border-radius 3px
        color #fff
</style>
