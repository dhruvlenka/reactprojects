import { useState, useEffect } from 'react'
import { TodoProvider } from './context/ToDoContext'
import './App.css'
import TodoItem from './components/Todoitem'
import { TodoForm } from './components'


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
           //old array     //new array
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
                         //loop
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => //true
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        //completed: override: !:falseToTrue and vv 
        completed: !prevTodo.completed } : prevTodo)) //false
  }

  //localStorage: loading or getting the data
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

    //localStorageL setting the data
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))//stringly: converting string to json
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
