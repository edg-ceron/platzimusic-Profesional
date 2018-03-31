<template>
  <div id="app">
    <h1>Escribe tu nombre:</h1>
    <input type="text" v-model="name" placeholder="Nombre">
    <input type="text" v-model="lastName" placeholder="Apellido">
    <p>{{fullName}}</p>

    <h1>Fecha de nacimiento</h1>
    <input type="date" v-model="birthday">
    <p>{{age}}</p>

    <button @click="format">Format</button>
    <p>{{formattedName}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      url: 'google.com',
      birthday: '',
      formattedName: ''
    }
  },

  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    },
    age () {
      if (this.birthday) {
        const today = new Date()
        const birthday = new Date(this.birthday)
        return today.getFullYear() - birthday.getFullYear()
      }
      return
    }
  },

  watch: {
    name (newValue, oldValue) {
      console.log(oldValue, newValue)
    }
  },

  methods: {
    format () {
      this.formattedName = this.name.split(' ').join('-').toUpperCase()
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
