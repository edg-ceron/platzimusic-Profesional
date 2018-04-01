<template>
  <div v-if="track && track.album"class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-6">
            <strong>
              {{track.name}}
            </strong>
            </p>
          <p class="subtitle is-6">
            {{track.artists[0].name}}
          </p>
        </div>
      </div>
      <div class="content">
        <small>{{track.duration_ms | ms-to-mm}}</small>
        <nav class="level">
          <div class="level-left">
            <button class="level-item button is-primary">
              <span @click="selectTrack" class="icon is-small"> ▶ </span>
            </button>
            <button class="level-item button is-warning">
              <span @click="goToTrack(track.id)" class="icon is-small"> 👁 </span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'trackList',
  props: {
    track: {type: Object, requiered: true}
  },
  data () {
    return {}
  },
  methods: {
    selectTrack () {
      if(!this.track.preview_url) {return}
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)
    },
    goToTrack (id) {
      if(!this.track.preview_url) {return}
      this.$router.push({name: 'track', params: {id}})
    }
  }
}
</script>
