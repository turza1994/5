<template>
  <div id="app">
    <h3 id="header">todos</h3>
    <AddTodo />
    <Todos />  
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
}
html, body, #app {
  height: 100%;
  margin: 0;
}
body{
  background: #f8f8f8;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#header{
  font-size: 6rem;
  font-weight: 20;
  color: rgba(95, 34, 34, 0.1);
}

</style>
