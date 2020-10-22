<template>
  <div>
    <home-title></home-title>
    <home-slider :sliderList="sliderList"></home-slider>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recomList="recomList"></home-recommend>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import homeTitle from './components/Title'
  import homeSlider from './components/slider'
  import homeIcons from './components/icons'
  import homeRecommend from './components/Recommend'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      homeTitle,
      homeSlider,
      homeIcons,
      homeRecommend
    },
    data() {
      return {
        lastCity: '',
        iconList: [],
        sliderList: [],
        recomList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city ' + this.city)
          .then(this.getHomeSucc)
      },
      getHomeSucc(res) {
        const response = res.data
        if (response.ret) {
          const data = response.data
          this.iconList = data.iconList
          this.sliderList = data.swiperList
          this.recomList = data.recommendList
        }
        console.log(response)
      }
    },
    mounted() {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated() {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    }
  }
</script>

<style scoped>

</style>
