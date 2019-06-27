<template>
    <div>
        <div 
            class="box" 
            :class="{ 'done': todo.done }" 
            v-for='(todo, id) in todoList' 
            v-bind:key = id
        >
            <h3>{{ todo.title }} </h3>
            <p>{{ todo.description }}</p>
            <button class="btn" @click="updateSelected(id)">{{ (!todo.done) ? 'Unmark' : 'Mark as Done'  }}</button>
            <button class="btn" @click="openTodoList(id)">Details</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todoList'], 
    data() {
        return {

        }
    },
    methods: {
        updateSelected(selectedIndex){
            let existing = localStorage.getItem('todolist');
            existing = existing ? JSON.parse(existing) : {};

            const title = existing[selectedIndex].title
            const description = existing[selectedIndex].description
            const done = !existing[selectedIndex].done
            const temp =  { title, description, done };

            existing[selectedIndex] = temp;
            localStorage.setItem('todolist', JSON.stringify(existing));
        },
        openTodoList(selectedIndex){
            this.$router.push({ 
                name:'TodoList', 
                params: { 
                    index: selectedIndex + 1
                } 
            })
        }
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
