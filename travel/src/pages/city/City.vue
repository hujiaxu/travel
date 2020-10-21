<template>
  <div>
    <city-title></city-title>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :target="target"></city-list>
    <city-alphabet :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'

  import cityTitle from './component/Title'
  import citySearch from './component/Search'
  import cityList from './component/List'
  import cityAlphabet from './component/Alphabet'

  export default {
    name: 'city',
    components: {
      cityTitle,
      citySearch,
      cityList,
      cityAlphabet
    },
    data() {
      return {
        hotCities: [],
        cities: {},
        target: ''
      }
    },
    mounted() {
      this.info()
    },
    methods: {
      info() {
        axios.get('/api/city.json')
          .then(this.infoSuccess)
      },
      infoSuccess(res) {
        const response = res.data
        if (response.ret && response.data) {
          const data = response.data
          this.hotCities = data.hotCities
          this.cities = data.cities
        }
      },
      handleChange(target) {
        this.target = target
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
