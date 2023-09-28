import React, { useState } from 'react'
import useTodo from '../Context/TodoContext'




function TodoForm() {
    

    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    // add ha ek function lihila aahe  ani to run hoto jevha  aapan todo madhe kahitari  type karun submit karel
                // tevha ha function run honar 101% 


    const add = (e)=>{
        e.preventDefault()

        if(!todo) return 
        // jar aapan kaich type न karta submit karel tevha aapan function la sangto ki ashya condition madhe pudhe
                          //  kahich return karu nako kiva pude jauch nako

        addTodo({todo, completed : false})
        setTodo("")
         //  👆 ethe aapan  addTodo function la sangitle ki ek navin object tayar kar aani tyamadhe aapan type kelele todo add kar aani tyachi 
        // completed chi value hi false thev. aani id tar aapan aadhich dilela aahe tyamule ethe parat deyachi garaj nahi. 


    }

    return (
        <form  className="flex"
            onSubmit={add}
        >
            <input
                type="text"
                value={todo}
                onChange={(e)=> setTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;