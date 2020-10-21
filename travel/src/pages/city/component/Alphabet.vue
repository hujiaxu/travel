<template>
  <div>
    <ul class="list">
      <li 
        class="item" 
        v-for="(item, index) in elements" 
        :key="index"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        :ref="item"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Alphabet',
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
      elements() {
        const elements = []
        for (let key in this.cities) {
          elements.push(key)
        }
        return elements
      }
    },
    methods: {
      handleClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {

          if (this.timer) {
            clearTimeout(this.timer)
          }
          setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.elements.length) {
              this.$emit('change', this.elements[index])
            }
          }, 20)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'

  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 79px
    bottom 0
    right 0
    width 20px
    text-align center
    color $bgColor
</style>
