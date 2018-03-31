<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <p class="title">Administrador de tareas</p>
    </div>
    <div class="column">
      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input type="text" class="input" v-model="newTask.title" placeholder="Actividad a realizar">
        </div>
      </div>
      <div class="field">
        <label class="label">Tiempo</label>
        <div class="control">
          <input type="number" class="input" v-model="newTask.time" placeholder="Tiempo estimado">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button @click="addTask" class="button is-link">Agregar</button>
        </div>
        <div class="control">
          <button @click="clear" class="button is-light">Cancelar</button>
        </div>
      </div>
    </div>
    <div class="column is-12">
      <div class="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th></th>
            <th>Actividad</th>
            <th>Tiempo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(t, i) in task">
            <th>{{i}}</th>
            <td>{{t.title}}</td>
            <td>{{t.time}}</td>
            <td>
              <div @click="removeTask(i)" class="tag is-danger">
                <a class="delete is-danger"></a>
              </div>
            </td>
          </tr>
        </tbody>
      </div>
      <!-- <div v-for="t in task">
        {{t.title}} {{t.time}}
      </div> -->
    </div>
    <div class="column">
      <label class="label">{{totalTime}}</label>
    </div>
  </div>
</template>

<script>

export default {
  name: 'manipulacionDom',
  data () {
    return {
      name: '',
      task: [
        // {title: 'Hola', time: 5},
        // {title: 'mundo', time: 7}
      ],
      newTask: {title: '', time: ''}
    }
  },

  created () {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  },

  computed: {
    totalTime () {
      let total = 0
      this.task.map((item) => {
        return total += parseInt(item.time)
      })
      return `El total de horas es: ${total}`
    }
  },

  methods: {
    addTask () {
      if (!this.newTask.title || !this.newTask.time) {return}

      this.task.push({title: this.newTask.title, time: this.newTask.time})

      localStorage.setItem("tasks", JSON.stringify(this.tasks))

      this.clear()
    },

    clear () {
      this.newTask.title = ''
      this.newTask.time = ''
    },

    removeTask (index) {
      this.task.splice(index)
      this.totalTime()
    }
  }
}
</script>

<style lang="scss">
</style>
