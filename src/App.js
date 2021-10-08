import React, { useState } from "react";
import "./App.css";
import Form from "./componenets/Form";
import TodoList from "./componenets/TodoList";


function App() {

  const[inputText,setInputText] = useState('');
  const[todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>Vlad's To Do List</header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText}/>

    

      
      


    </div>
  );
}

export default App;
