<template>
  <div id="app">
    <input type="text" v-model="name">
    <p>{{name}}</p>

    <a :href="url"> Link</a>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      url: 'google.com'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
