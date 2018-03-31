<template>
  <div id="app">
    <Header />
    <section class="section">
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
      <div class="column">
        <div v-for="t in tracks">
          {{t.name}} - {{t.artists[0].name}}
        </div>
      </div>
    </section>
    <br>
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
import ManipulacionDom from './views/manipularDom'
import Footer from './components/layout/footer'
import Header from './components/layout/header'

import Reactividad from './practicas/reactividad'

import trackService from './services/track'

const tracks = [

]
export default {
  name: 'app',

  components: {
    ManipulacionDom,
    Footer,
    Header,
    Reactividad
  },

  data () {
    return {
      searchQuery: '',
      tracks: []
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
      trackService.search(this.searchQuery)
        .then(res => {
          return this.tracks = res.tracks.items
        })
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
