<template>
  <div id="app">
    <Header />
    <Loader v-show="isLoading"/>
    <section v-show="!isLoading" class="section">
      <nav class="nav has-shadow">
        <div class="columns is-gapless is-mobile">
          <div class="column is-9">
            <input
              v-model="searchQuery"
              class="input is-large"
              type="text"
              placeholder="Buscar canciones"
            >
          </div>
          <div class="column">
            <a @click="search" class="button is-info is-large">Buscar</a>
          </div>
          <div class="column">
            <a class="button is-danger is-large"> &times</a>
          </div>
        </div>
      </nav>
      <small class="has-text-grey-lighter">{{searchMessage}}</small>
      <div class="container results">
        <div class="columns is-multiline">
          <div v-for="t in tracks" class="column is-one-quarter">
            <Track :track="t" @select="setSelectedTrack" :class="{'is-active': t.id === selectedTrack}"/>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <ManipulacionDom />
    </section>

    <section class="section">
      <Reactividad />
    </section>

    <Footer />

  </div>
</template>

<script>
import ManipulacionDom from '@/views/manipularDom'
import Reactividad from '@/practicas/reactividad'

import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Track from '@/components/track'
import Loader from '@/components/shared/loaded'

import trackService from './services/track'

const tracks = [

]
export default {
  name: 'app',

  components: {
    ManipulacionDom,
    Footer,
    Header,
    Reactividad,
    Track,
    Loader
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,

      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return ` Entrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) {return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.isLoading = false
          return this.tracks = res.tracks.items
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

.is-active{
  border: 3px #ff3860 solid;
}
</style>
