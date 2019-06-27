<template>
  <div>
    <!-- <Card :todo-id="todoId" /> -->
    <div v-for='(todo, index) in todoList' v-bind:key = 'index'  >
        <div  class = "box" v-bind:class="{ done: todo.done }" v-show="todoId == index + 1">
          <p>New page</p>
          <div v-if="titleText || descText">
            <h1>{{titleText}}</h1>
            <h3>{{descText}}</h3>
          </div>
          <div v-else>
            <h1 >{{todo.title}}</h1>
          <h3>{{todo.description}}</h3>
          </div>
          
          <div>
            <form >
              <div class="field">
                <label>Title</label>
                <input v-model="titleText" type="text" ref="title" defaultValue="">
              </div>
              <div class="field">
                <label>desc</label>
                <input v-model="descText" type="text" ref="description" defaultValue="">
              </div>
              <div class="buttons">
                <button class="btn" @click="editForm(index)">
                  Edit
                </button>
                <button class="btn" v-on:click="removeForm">
                  Remove
                </button>
                <button class="btn" @click="marked(index)">{{ (!todo.done) ? 'Unmark' : 'Mark as Done'  }}</button>
              </div>
            </form>
        </div>
        </div>
       
    </div>
    
  </div>
</template>

<script>
  export default {
      name: "TodoList",
      data() {
        return {
          todoId: this.$route.params.index,
          todoList: JSON.parse(localStorage.getItem('todolist')),
          titleText: "",
          descText: "",
        
        }
      },
      methods: {
        editForm(selectedIndex) {
          if (this.titleText.length > 0 && this.descText.length > 0) {
            
            const title = this.titleText
            const description = this.descText
            const done = this.todoList[selectedIndex].done
            const temp =  { 'title' : title, 'description' : description, done: done };

            this.todoList[selectedIndex] = temp;
            localStorage.setItem('todolist', JSON.stringify(this.todoList));
          }
        },
        marked(selectedIndex){
  
          const title = this.todoList[selectedIndex].title
          const description = this.todoList[selectedIndex].description
          const done = !this.todoList[selectedIndex].done
          const temp =  { 'title' : title, 'description' : description, done: done };

          this.todoList[selectedIndex] = temp;
          localStorage.setItem('todolist', JSON.stringify(this.todoList))
      },
        removeForm(selectedIndex){
          this.todoList.splice(selectedIndex, 1);
          const parsed = JSON.stringify(this.todoList);
          localStorage.setItem('todolist', parsed);
        }
  }
  }
</script>

<style>
  .box.done {
        background-color: aquamarine;
        border: none;
        box-shadow: 0px 10px 30px rgba(aquamarine,0.4)
  }
</style>