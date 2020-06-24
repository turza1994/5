// import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

const state = {
    value: '',
    allTodos: [],
    activeTodos: [],
    completedTodos: []
}

const getters = {
    allTodos: (state) => {
        if(state.value=='' || state.value=='all'){
            return state.allTodos
        }
        else if(state.value=='completed'){
            return state.completedTodos
        }
        else if(state.value=='active'){
            return state.activeTodos
        }
    }
}

const actions = {
    
    fetchTodos({ commit }){
        
        state.value = 'all';
        commit('defaultTodos', state.value);
        
    },

    addTodo({ commit }, title){
        const response =  {
            id: uuidv4(),
            title: title,
            completed: false
        }
        // console.log(response);
        commit('addTodo', response);
    },

    deleteTodo({ commit }, id){
        
        commit('delTodo', id);

    },

    activeTodos({commit}){
        state.value = 'active';
        commit('activeTodos', state.value);
    },

    completedTodos({commit}){
        state.value='completed';
        commit('comTodos', state.value);
    },

    clearCompletedTodos({ commit }){
        state.value='';
        commit('clearCompletedTodos', state.value);
    }
}

const mutations = {
    // setTodos: (state, todos) => { state.todos = todos },
    addTodo: (state, todo) => { state.allTodos.push(todo)},

    delTodo: (state, id) => { state.allTodos = state.allTodos.filter(cv => cv.id != id) },

    activeTodos: (state, value) => { 
        state.value = value;
        state.activeTodos = state.allTodos.filter(cv => cv.completed == false);
     },

    comTodos: (state, value) => {
        state.value = value; 
        state.completedTodos = state.allTodos.filter(cv => cv.completed == true) 
    },

    defaultTodos: (state, value) => {
        state.value = value; 
    },

    clearCompletedTodos: (state, value) => {
        state.value = value; 
        state.allTodos = state.allTodos.filter(cv => cv.completed == false)
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}