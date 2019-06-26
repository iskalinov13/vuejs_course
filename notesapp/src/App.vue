<template>
  <div id="app">
    <router-link to = "/posts">Home</router-link>
    <!-- <router-link to = "/posts/id/">TodoList</router-link> -->
    <router-link to = "/posts/new/">New TodoList</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
