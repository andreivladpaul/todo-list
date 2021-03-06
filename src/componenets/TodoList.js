import React from "react";
import Todo from "./Todo";
const TodoList = ({todos, inputText, setTodos}) => {
    

    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                   <Todo text={todo.text} todo={todo} todos={todos} setTodos={setTodos} /> 
                ))}
            </ul>
        </div>
     );
}
 
export default TodoList;