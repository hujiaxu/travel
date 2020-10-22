<template>
  <div class="slide-banner">
    <div class="banner-wrapper">
      <div class="slide-banner-wrapper" ref="slide" v-show="showSlider">
        <div class="slide-banner-content">
          <img v-for="image in sliderList" :src="image.imgUrl" :key="image.id" class="slide-page">
        </div>
      </div>
      <div class="dots-wrapper">
        <span
          class="dot"
          v-for="num in nums"
          :key="num"
          :class="{'active': currentPageIndex === (num - 1)}"></span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from '@better-scroll/core'
  import Slide from '@better-scroll/slide'

  BScroll.use(Slide)

  export default {
    props: {
      sliderList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        nums: 4,
        currentPageIndex: 0
      }
    },
    beforeUpdated() {
      this.slide.refresh()
    },
    beforeDestroy() {
      this.slide.destroy()
    },
    methods: {
      init() {
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          slide: true,
          useTransition: true,
          momentum: false,
          bounce: false,
          stopPropagation: true,
          probeType: 2
        })
        this.slide.on('scrollEnd', this._onScrollEnd)

        this.slide.on('slideWillChange', (page) => {
          // console.log(page.pageX)
          this.currentPageIndex = page.pageX
        })
        this.slide.on('refresh', () => {})
      },
      _onScrollEnd () {
        console.log(this.slide.getCurrentPage())
      }
    },
    computed: {
      showSlider() {
        this.$nextTick(() => {
          this.init()
        })
        return this.sliderList.length
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

.slide-banner
  .banner-wrapper
    position relative
  .slide-banner-wrapper
    min-height 1px
    overflow hidden
  .slide-banner-content
    white-space nowrap
    height 98px
    font-size 0
    .slide-page
      display inline-block
      img
        padding-bottom 27%
        overflow hidden
        height: 0
        width 100%
  .dots-wrapper
    position absolute
    bottom 4px
    left 50%
    transform translateX(-50%)
    .dot
      display inline-block
      margin 0 4px
      width 8px
      height 8px
      border-radius 50%
      background #eee
      &.active
        width 20px
        border-radius 5px

</style>
