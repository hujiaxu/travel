<template>
  <div ref="listWheel" class="list">
    <div class="listWheel">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="itemList of item" :key="itemList.id">
          <div class="item border-bottom">{{itemList.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import MouseWheel from '@better-scroll/mouse-wheel'
  BScroll.use(MouseWheel)

  export default {
    name: 'List',
    props: {
      cities: Object,
      hotCities: Array,
      target: String
    },
    mounted () {
      this.$nextTick(() => {
        this.init()
      })
    },
    updated() {
      this.scroll.refresh()
    },
    watch: {
      target() {
        const element = this.$refs[this.target][0]
        this.scroll.scrollToElement(element, 300)
      }
    },
    methods: {
      init() {
        this.scroll = new BScroll(this.$refs.listWheel, {
          MouseWheel: true
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .border-topbottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
  .border-bottom
  &:before
    border-color #cccccc
  .list
    overflow hidden
    position absolute
    top 79px
    left 0
    right 0
    bottom 0
    .title
      line-height 24px
      background #eeeeee
      padding-left 10px
      color #666
      font-size 12px
    .button-list
      overflow hidden
      padding 5px 30px 5px 5px
      .button-wrapper
        float left
        width 33.33%
        .button
          margin 5px
          padding 5px 0
          font-size 16px
          text-align center
          border 1px solid #cccccc
          border-radius 3px
    .item-list
      .item
        line-height 30px
        color #666
        padding-left 10px

</style>
