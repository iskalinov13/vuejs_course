<template>
  <div>
    <Card :todo-list="todoList" />
  </div>
</template>
<script>
  import Card from './Card';

  export default {
    name: 'Home',
    data() {
      return {
        todoList: []
      }
    },
    mounted() {
        if (localStorage.getItem('todolist')) {
          this.todoList = JSON.parse(localStorage.getItem('todolist'));
        }
    },
    // methods:{
    //   updateSelected(selectedIndex){
    //     var existing = localStorage.getItem('todolist');
    //     existing = existing ? JSON.parse(existing) : {};

    //     const title = existing[selectedIndex].title
    //     const description = existing[selectedIndex].description
    //     const done = !existing[selectedIndex].done
    //     const temp =  { 'title' : title, 'description' : description, done: done };

    //     existing[selectedIndex] = temp;
    //     localStorage.setItem('todolist', JSON.stringify(existing));
    //   }
    // }
  }
</script>

<style>
  
</style>