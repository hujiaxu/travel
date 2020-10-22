<template>
  <div>
    <div class="search">
      <input type="text" placeholder="输入城市或拼音" class="search-input" v-model="keyWord">
    </div>
    <div class="search-content" v-show="keyWord" ref="scrollList">
      <ul>
        <li v-for="(item, index) in listData" :key="index" class="search-item border-bottom" @click="handleCityClick(item)">{{item}}</li>
        <li v-show="hasList">没有您搜索的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from '@better-scroll/core'
  import MouseWheel from '@better-scroll/mouse-wheel'
  BScroll.use(MouseWheel)

  export default {
    name: 'Search',
    props: {
      cities: Object
    },
    data() {
      return {
        keyWord: '',
        listData: [],
        timer: null
      }
    },
    updated() {
        this.init()
    },
    methods: {
      init() {
        this.scroll = new BScroll(this.$refs.scrollList)
      },
      handleCityClick(city) {
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
    },
    watch: {
      keyWord() {
        if (this.timer) {
          clearTimeout(this.timer)
        }

        if (!this.keyWord) {
          this.listData = []
          return this.listData
        }

        this.timer = setTimeout(() => {
          const result = []
          for (let key in this.cities) {
            this.cities[key].forEach((value) => {
              if ((value.spell.indexOf(this.keyWord) > -1) || (value.name.indexOf(this.keyWord) > -1)) {
                result.push(value.name)
              }
            })
          }
          console.log(result)
          this.listData = result
        }, 20)
      }
    },
    computed: {
      hasList() {
        return !this.listData.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .border-bottom
  &:before
    border-color #cccccc
  .search
    height 36px
    padding 0 5px
    background $bgColor
    .search-input
      width 100%
      height 30px
      padding 0 3px
      margin 0 auto
      line-height 30px
      text-align center
      border none
      outline medium
      border-radius 3px
      box-sizing border-box
      color #666
  .search-content
    overflow hidden
    z-index 1
    position absolute
    top 79px
    bottom 0
    left 0
    right 0
    background #eeeeee
    .search-item
      line-height 30px
      color #666
      padding-left 10px
</style>
