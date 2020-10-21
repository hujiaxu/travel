<template>
  <div>
    <home-head :city="city"></home-head>
    <home-slider :sliderList="sliderList"></home-slider>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recomList="recomList"></home-recommend>
  </div>
</template>

<script>
  import homeHead from './components/Head'
  import homeSlider from './components/slider'
  import homeIcons from './components/icons'
  import homeRecommend from './components/Recommend'
  import axios from 'axios'

  export default {
    name: 'Home',
    components: {
      homeHead,
      homeSlider,
      homeIcons,
      homeRecommend
    },
    data() {
      return {
        city: '',
        iconList: [],
        sliderList: [],
        recomList: []
      }
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json')
          .then(this.getHomeSucc)
      },
      getHomeSucc(res) {
        const response = res.data
        if (response.ret) {
          const data = response.data
          this.city = data.city
          this.iconList = data.iconList
          this.sliderList = data.swiperList
          this.recomList = data.recommendList
        }
        console.log(response)
      }
    },
    mounted() {
      this.getHomeInfo()
    }
  }
</script>

<style scoped>

</style>
