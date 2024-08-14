import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {

  const [todos , setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, {
          id: crypto.randomUUID(),
          title,
          completed: false,
      }]

  })
  }

  function toogleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo =>{
        if (todo.id === id) {
          return {...todo, completed}
        }

        return todo

      })
    })
    
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
    
  }

  console.log(todos)

  return (
    <>
      <NewTodoForm todosList={todos} onSubmit={addTodo} />
      <h1 className="header">Lista de Tareas</h1>
      <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
