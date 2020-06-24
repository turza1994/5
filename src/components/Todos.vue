<template>
  <div class="Todos">
      <div class="todos" v-for="todo in allTodos" v-bind:key="todo.id">
        <div class="todo" v-bind:class="{ 'is-complete' : todo.completed }">
          <input type="checkbox" @click="onClickCheckbox(todo)">
          <label-edit :text="todo.title" id="labeledit1" v-on:text-updated="textUpdated" placeholder="Enter some text">
            {{todo.title}}
          </label-edit>
          <button @click="deleteTodo(todo.id)">X</button>
        </div>
      </div>

      <footer v-if="allTodos.length > 0">
        <span id="item-left"> {{allTodos.filter(cv => cv.completed == false).length}} items left</span>
        <button @click="onClickAllButton">all</button>
        <button @click="onClickActiveButton">active</button>
        <button @click="onClickCompleted">completed</button>
        <button id="clear-completed" @click="onClickClear">clear completed</button>
      </footer>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import LabelEdit from 'label-edit'

export default {
    name: "Todos",

    data () {
    return {
      text: 'Click this text!',
      }
    },

    components: {
    LabelEdit
    },

    computed: mapGetters(['allTodos']),
    methods: {
      ...mapActions(['fetchTodos', 'deleteTodo', 'completedTodos', 'activeTodos', 'clearCompletedTodos']),

      onClickCheckbox(todo){
        // this.allTodos = this.allTodos.map(cv => cv.completed=);
        todo.completed = !todo.completed;
        // console.log(todo)
        // console.log(this.allTodos)
      },

      onClickAllButton(){
        this.fetchTodos();
        console.log('done')
      },

      onClickActiveButton(){
        this.activeTodos();
        console.log('done')
      },

      onClickCompleted(){
        console.log(this.allTodos);
        this.completedTodos();

      },

      onClickClear(){console.log('done')
        this.clearCompletedTodos();
        
      },

      textUpdated: function(text){
      this.text = text;
      }

      },

      created: function(){this.fetchTodos()}
      
}
</script>

<style scoped>

  .Todos{
    background: white;
    width: 30vw;
    border-top: 1px solid rgb(209, 206, 206);
    padding: 0 40px;
  }

  .todo{
    display: flex;
    line-height: 2rem;
    margin: 2vh 0;
    font-size: 1.5rem;
    color: rgba(44, 43, 43,0.7);
  }
  .is-complete{
        text-decoration: line-through;
    }
  .todo input[type="checkbox"]{
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1vw;
    visibility: hidden;
  }
  .todo:hover input[type="checkbox"]{
    visibility: visible;
  }
   .todo input[type="checkbox"]:checked{
    visibility: visible;
  }
  .todo button{
    border: none;
    background: white;
    color: rgba(165, 105, 105, 0.5);
    margin-left: auto;
    visibility: hidden;
    font-size: 1.5rem;
  }
  .todo:hover button{
    visibility: visible;
  }
  
  footer {
    display: flex;
    
    opacity: 0.5;
  }
  footer button{
    background: white;
    border: none;
    margin: 0 1vw;
  }
  footer button:hover{
    cursor: pointer;
  }
  #item-left{
    margin-right: auto;
  }
  #clear-completed{
    margin-left: auto;
  }
</style>