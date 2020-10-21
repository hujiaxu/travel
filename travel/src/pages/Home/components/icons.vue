<template>
  <div ref="slide">
    <div>
        <div class="icons-wrapper">
          <div class="icon" v-for="item of iconList" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl">
            </div>
            <p class="icon-text">{{item.desc}}</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'icons',
    props: {
      iconList: {
        type: Array,
        default() {
          return []
        }
      }
    }
    // computed: {
    //   pages() {
    //     const pages = []
    //     this.iconList.forEach((item, index) => {
    //       const page = Math.floor(index / 8)
    //       if (!pages[page]) {
    //         pages[page] = []
    //       }
    //       pages[page].push(item)
    //     })
    //     return pages
    //   }
    // }
  }
</script>

<style lang="stylus" scoped>
  .icons-wrapper
    margin-top 5px
    height 0
    padding-bottom 50%
    overfolw hidden
    .icon
      position relative
      float left
      width 25%
      height 0
      padding-bottom 25%
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom 22px
        box-sizing border-box
        padding 5px
        img
          display block
          margin 0 auto
          height 100%
      .icon-text
        position absolute
        bottom 0
        left 0
        right 0
        color #333
        height 22px
        line-height 22px
        text-align center
</style>
