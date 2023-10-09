import { Tod } from "./Tod"

export const Todo = ({todo = [], deleteTodo, updateTodo }) => {
    return (
        <div className="mt-5">
            <h1 className="text-center">Todo</h1>
            <ul className="list-group">
                {
                    todo.map( t => (
                        <Tod 
                            key={t.id} 
                            t={t} 
                            deleteTodo={deleteTodo} 
                            updateTodo={updateTodo}
                        />
                    ))
                }
                {
                    todo.length === 0 &&
                    <li className="list-group-item text-center">
                        Todo empty
                    </li>
                }
            </ul>
        </div>
    )
}