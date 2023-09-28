import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import { TodoForm, TodoItem } from "./Components";

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id : Date.now(), ...todo}, ...prev])
  }
  // 👆 so in the addTodo method.  we have option that setTodos can give the previous state of array aani tyamdhe aapan mantho ki ek navin array
  // ghe aani tyamadhil value tya array madhe ghe with the help of spread operator aani ek navin object tayar kara aani tyamadhe todo add kara 

  const updateTodo = (id, todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)) )}
    // 👆 so in the  updateToto function  setTodos give the previous state of the todos array and we call it as a "prev"

  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const todoComplete = (id)=>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed : !prevTodo.completed} : prevTodo))
  }




  useEffect(()=>{
    const todos =  JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  





  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, todoComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>(
                <div key={todo.id} className="w-full">
                  <TodoItem todo={todo}/>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
