<template>
    <div>
      <form v-on:submit.prevent="sendForm">
        <div class="field">
          <label>Title</label>
          <input v-model="titleText" type="text" ref="title" defaultValue="">
        </div>
        <div class="field">
          <label>desc</label>
          <input v-model="descText" type="text" ref="description" defaultValue="">
        </div>
        <div class="buttons">
          <button type="submit" class="createButton">
            Create
          </button>
          <button class="cancelButton" v-on:click="closeForm">
            Cancel
          </button>
        </div>
      </form>
     </div>
</template>

<script>
  export default {
    name: 'NewTodoList',
    data() {
      return {
        todolist: JSON.parse(localStorage.getItem('todolist')) || [],
        titleText: "",
        descText: "",
        isCreating: false
      };
    },
  
    methods: {
      openForm() {
        this.isCreating = true;
      },
      
      closeForm() {
        this.isCreating = false;
      },

      sendForm() {
        if (this.titleText.length > 0 && this.descText.length > 0) {
          const title = this.titleText;
          const desc = this.descText;
          const temp =  { 'title' : title, 'description' : desc, done: false };
          this.todolist.push(temp);
          this.titleText = "";
          this.descText = "";
          this.isCreating = false;
          localStorage.setItem('todolist', JSON.stringify(this.todolist));
        }
    }
  }
}
</script>
