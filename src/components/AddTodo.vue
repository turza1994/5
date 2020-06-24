<template>
  <div id="AddTodo">
        <i>^</i>
        <input type="text" v-model="title" placeholder="What needs to be done ?" @keypress.enter="onEnter" >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'AddTodo',

    data(){
        return{
            title:''
        }
    },

    methods:{
        ...mapActions(['addTodo']),
        
        onEnter(){  
            this.addTodo(this.title);
            this.title='';
        }
    }

}
</script>

<style>
    #AddTodo{
        position: relative;
    }

    i{
        position: absolute;
        top: 0.3vh;
        left: 1vw;
        font-size: 2rem;
        opacity: 0.2;
        transform: rotate(180deg);
    }

    input[type=text]{
        width: 30vw;
        height: 3rem;
        outline: none;
        border-width:0px;
        border:none;
        padding: 0 40px;
        font-size: 1.5rem;
        color: rgba(0, 0, 0, 1);
    }
    ::placeholder { 
        
        opacity: 0.5; 
        }
</style>