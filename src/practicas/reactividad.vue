<template>
  <div>
    <h1>{{person}}</h1>
    <button @click="addProp" class="button"> Add Prop</button>
  </div>
</template>

<script>
export default {
  name: 'reactividad',

  data () {
    return {
      person: {
        name: 'Edgar'
      }
    }
  },

  created () {
    // Para hacer peticiones http o a api-rest
    console.log('created ...')
  },

  mounted () {
    // Cuando ya esta montando en el Dom y ya puedo acceder a elementos html
    console.log('mounted ....')
  },

  methods: {
    addProp () {
      // this.$set(this.person, 'lastName', 'Ceron')
      this.person = Object.assign({}, this.person, {a:1, b:2})
    }
  }
}
</script>
