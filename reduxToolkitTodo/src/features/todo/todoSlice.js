import {createSlice, nanoid } from '@reduxjs/toolkit';

//creating initial state
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    //objects 
    name: 'todo', //property
    initialState,
    reducers: {
        //properties and functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

//exporiting functions or functionality
export const {addTodo, removeTodo} = todoSlice.actions
//exporting the reducer
export default todoSlice.reducer