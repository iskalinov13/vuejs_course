<template>
  <div>
    <div class="box"  v-for='todo in todo_list' v-bind:key = todo.id  >
        <h3>{{ todo.title }} </h3>
        <p>{{ todo.description }}</p>
        <button class="btn" @click='markAsDone(todo.id)'>{{ (todo.done) ? 'Unmark' : 'Mark as Done'  }}</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    data() {
      return {
        todo_list: []
      }
    },
    mounted() {
        if (localStorage.getItem('todolist')) {
          this.todo_list = JSON.parse(localStorage.getItem('todolist'));
        }
    },
    methods:{
      markAsDone(index) {
        console.log(index)
        this.todo_list = JSON.parse(localStorage.getItem('todolist'));
       // const todoIndex = this.todo_list.indexOf(index);
        //this.todo_list[todoIndex].done = true;
        localStorage.setItem('todolist', JSON.stringify(this.todolist));
    },
    }
  }
</script>

<style>
  h1 {
      margin: 0px;
  }
  html,body{
      font-family: Arial, Helvetica, sans-serif;
      margin: 10px;
      padding: 0;
  }
  .box {
      margin: 0 auto;
      width: 400px;
      border-radius: 15px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 15px;
      margin-bottom: 15px;
      box-shadow: 0px 10px 30px rgba(0,0,0,0.2)
  }
  .box.done {
        background-color: aquamarine;
        border: none;
        box-shadow: 0px 10px 30px rgba(aquamarine,0.4)
  }
  .btn{
      background-color: rgba(0, 0, 0, 0.08);
      padding: 10px 8px;
      border: none;
      border-radius: 5px;
  }
</style>