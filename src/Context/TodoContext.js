import { createContext, useContext } from "react";


 export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : 'todo msg',
            completed : false
        },
    ],
    addTodo : (todo) =>{},
    updateTodo : (todo, id) => {},
    deleteTodo : (id)=>{},  
    todoComplete : (id)=>{}
    
 })


 export const TodoProvider = TodoContext.Provider



 export default function  useTodo(){
    return  useContext(TodoContext)
 }

