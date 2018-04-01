<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
// import ManipulacionDom from '@/views/manipularDom'
// import Reactividad from '@/practicas/reactividad'
// import Child from '@/practicas/childComponent'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'

import trackService from '@/services/track'

const tracks = [

]
export default {
  name: 'app',

  components: {
    // ManipulacionDom,
    Footer,
    Header
    // Reactividad,

    // Child,
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
