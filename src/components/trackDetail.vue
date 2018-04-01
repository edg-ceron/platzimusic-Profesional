<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <Track :track="track" />
      </div>
    </div>
  </div>
</template>

<script>

import Track from '@/components/track'
import trackService from '@/services/track'

export default {
  components: {
    Track
  },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
    .then(res => {
      this.track = res
    })
  }
}
</script>

<style scoped>
  .columns {
    margin: 20px
  }
</style>
