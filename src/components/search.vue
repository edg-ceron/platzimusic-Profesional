<template>
  <main>
    <Notification v-show="showNotification">
      <p slot="body">No se encontraron resultados</p>
    </Notification>
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

    <section class="section">
      <Child>
        <h1 slot="title">Titulo Slot</h1>
      </Child>
    </section>

  </main>
</template>

<script>
import ManipulacionDom from '@/views/manipularDom'
import Reactividad from '@/practicas/reactividad'
import Child from '@/practicas/childComponent'

import Track from '@/components/track'
import Loader from '@/components/shared/loaded'
import Notification from '@/components/shared/notification.vue'

import trackService from '@/services/track'

const tracks = [

]
export default {
  name: 'search',

  components: {
    ManipulacionDom,
    Reactividad,
    Track,
    Loader,
    Child,
    Notification
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,
      showNotification: false,

      selectedTrack: ''
    }
  },

  computed: {
    searchMessage () {
      return ` Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification){
        setTimeout( ()=> {
          this.showNotification = false
        }, 3000)
      }
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) {return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
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
.is-active{
  border: 3px #ff3860 solid;
}
</style>
