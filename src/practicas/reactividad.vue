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

  methods: {
    addProp () {
      // this.$set(this.person, 'lastName', 'Ceron')
      this.person = Object.assign({}, this.person, {a:1, b:2})
    }
  }
}
</script>
