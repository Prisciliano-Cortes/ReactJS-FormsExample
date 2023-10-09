import { useEffect, useState } from "react"
import { Controller } from "./components/Controller"
import { Form } from "./components/Form"
import { NoController } from "./components/NoController"
import { Todo } from "./components/Todo"

export const App = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo])
    
    const addTodo = (to) => {
        setTodo([
            ...todo,
            to
        ])
    }

    const deleteTodo = (id) => {
        const newArray = todo.filter( t => t.id !== id)
        setTodo(newArray)
    }

    const updateTodo = (id) => {
        const newArray = todo.map( t => {
            if (t.id === id) {
                t.state = !t.state
            }

            return t
        })

        setTodo(newArray)
    }

    const orderTodo = (arrayTodo = []) => {
        return arrayTodo.sort((a, b) => {
            if (a.priority === b.priority) {
                return 0
            }

            if (a.priority ) {
                return -1
            }

            if (!a.priority ) {
                return 1
            }
        })
    }   

    return (
        <div className="container">
            <h1 className="my-5">Forms</h1>
            {/* <NoController />

            <Controller /> */}

            <Form addTodo={addTodo} />
            <Todo 
                todo={orderTodo(todo)} 
                deleteTodo={deleteTodo} 
                updateTodo={updateTodo} 
            />
        </div>
    )
}